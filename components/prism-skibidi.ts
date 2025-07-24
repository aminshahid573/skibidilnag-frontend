import Prism from 'prismjs';

(function(prism) {
    if (typeof prism === 'undefined') {
        return;
    }

    // The order of definition matters. More specific patterns should come first.
    prism.languages.skibidi = {
        'comment': {
            pattern: /bruh.*/,
            greedy: true,
        },
        'string': {
            pattern: /"(?:\\.|[^"\\])*"/,
            greedy: true,
        },
        'class-name': { // For function definitions `sigma myFunc`
            pattern: /(\bsigma\s+)[a-zA-Z_]\w*/,
            lookbehind: true,
        },
        'function': [
            { // For function calls `beta myFunc`
                pattern: /(\bbeta\s+)[a-zA-Z_]\w*(?=\s*\()/,
                lookbehind: true,
            },
            { // For built-in functions like `len()`
                pattern: /\b(?:len|abs|str)(?=\s*\()/
            }
        ],
        'keyword': /\b(?:skibidi|rizz|cap|nocap|bussin|gyatfor|alpha|beta|sigma|input)\b/,
        'boolean': /\b(?:true|false)\b/,
        'important': { // For the statement terminator `ohio`
            pattern: /\bohio\b/,
            alias: 'bold'
        },
        'number': /\b-?\d+(?:\.\d+)?\b/,
        'operator': /[+\-*/%]=?|==|!=|<=?|>=?|&&|\|\|/,
        'punctuation': /[{}();,.]/,
    };
})(Prism);
