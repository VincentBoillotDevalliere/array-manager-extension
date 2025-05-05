import * as vscode from 'vscode';

export class ArraySizeInlayHintsProvider implements vscode.InlayHintsProvider {
    public readonly onDidChangeInlayHints?: vscode.Event<void>;

    public provideInlayHints(
        document: vscode.TextDocument,
        range: vscode.Range,
    ): vscode.ProviderResult<vscode.InlayHint[]> {
        return this.provideInlayHintsWithLanguageServer(document, range);
    }

    private async provideInlayHintsWithLanguageServer(
        document: vscode.TextDocument,
        range: vscode.Range,
    ): Promise<vscode.InlayHint[]> {
        const hints: vscode.InlayHint[] = [];

        try {
            // Process the entire document text for regex matching
            const text = document.getText();

            // Get all array literals from the document text
            const arrayMatches = this.findArrayLiterals(document, text);

            for (const match of arrayMatches) {
                const { position, arrayContent, fullArray } = match;

                // Skip empty arrays
                if (arrayContent.trim().length === 0) {
                    continue;
                }

                // Count elements using the advanced parser
                const count = this.getArraySizeAdvanced(fullArray);

                // Create the inlay hint
                const hint = new vscode.InlayHint(
                    position,
                    `[${count}]`,
                    vscode.InlayHintKind.Type
                );

                // Make the hint slightly less visible than normal text
                hint.tooltip = 'Array size';
                hints.push(hint);
            }

            return hints;
        } catch (error) {
            console.error('Error in array size inlay hints provider:', error);
            return hints;
        }
    }

    private findArrayLiterals(document: vscode.TextDocument, text: string): Array<{ position: vscode.Position, arrayContent: string, fullArray: string }> {
        const results: Array<{ position: vscode.Position, arrayContent: string, fullArray: string }> = [];

        // Find array literals while considering balanced brackets
        let bracketDepth = 0;
        let currentArrayStart = -1;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            // Handle string literals to avoid counting brackets inside strings
            if (char === '"' || char === "'" || char === '`') {
                const quoteChar = char;
                let escaped = false;
                i++;

                // Skip to the end of the string
                while (i < text.length) {
                    if (text[i] === '\\') {
                        escaped = !escaped;
                    } else if (text[i] === quoteChar && !escaped) {
                        break;
                    } else {
                        escaped = false;
                    }
                    i++;
                }

                // Continue with the next character after the string
                continue;
            }

            // Handle array brackets
            if (char === '[') {
                bracketDepth++;
                if (bracketDepth === 1) {
                    currentArrayStart = i;
                }
            } else if (char === ']') {
                bracketDepth--;

                // When we've closed a top-level array
                if (bracketDepth === 0 && currentArrayStart !== -1) {
                    const fullArray = text.substring(currentArrayStart, i + 1);
                    const content = text.substring(currentArrayStart + 1, i);

                    // Position at the end of the array declaration
                    const position = document.positionAt(i + 1);

                    results.push({
                        position,
                        arrayContent: content,
                        fullArray: fullArray
                    });

                    currentArrayStart = -1;
                }
            }
        }

        return results;
    }

    private getArraySizeAdvanced(arrayLiteral: string): number {
        // Basic validation
        if (!arrayLiteral || !arrayLiteral.startsWith('[') || !arrayLiteral.endsWith(']')) {
            return 0;
        }

        // Handle empty array
        const content = arrayLiteral.slice(1, -1).trim();
        if (content.length === 0) {
            return 0;
        }

        // Tokenize the array content considering strings, objects, and nested arrays
        const tokens: string[] = [];
        let currentToken = '';
        let inString = false;
        let stringQuote = '';
        let bracketDepth = 0;
        let braceDepth = 0;
        let escaped = false;

        for (let i = 0; i < content.length; i++) {
            const char = content[i];

            // Handle string literals
            if ((char === '"' || char === "'" || char === '`') && !escaped) {
                if (!inString) {
                    inString = true;
                    stringQuote = char;
                } else if (char === stringQuote) {
                    inString = false;
                }
            }

            // Handle escaping
            if (char === '\\' && inString) {
                escaped = !escaped;
            } else {
                escaped = false;
            }

            // Track nesting level
            if (!inString) {
                if (char === '[') bracketDepth++;
                else if (char === ']') bracketDepth--;
                else if (char === '{') braceDepth++;
                else if (char === '}') braceDepth--;
            }

            // Process commas at the top level
            if (char === ',' && !inString && bracketDepth === 0 && braceDepth === 0) {
                tokens.push(currentToken.trim());
                currentToken = '';
            } else {
                currentToken += char;
            }
        }

        // Add the last token
        if (currentToken.trim()) {
            tokens.push(currentToken.trim());
        }

        // Filter out empty tokens (which might happen with consecutive commas)
        return tokens.filter(token => token.length > 0).length;
    }
}

// Extension activation function
export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "array-size-extension" activated!');

    // Register the provider for JavaScript, TypeScript, and JSON files
    context.subscriptions.push(
        vscode.languages.registerInlayHintsProvider(
            [
                { scheme: 'file', language: 'javascript' },
                { scheme: 'file', language: 'typescript' },
                { scheme: 'file', language: 'json' },
                { scheme: 'file', language: 'jsonc' }  // JSONC supports comments
            ],
            new ArraySizeInlayHintsProvider()
        )
    );
}

// Deactivation function (optional)
export function deactivate() { }
