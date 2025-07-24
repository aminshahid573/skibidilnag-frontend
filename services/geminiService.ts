export const runSkibidiLangCode = async (code: string): Promise<{ output: string | null; error: string | null; }> => {
  const endpoint = 'https://skibidi-lang-playground-server.onrender.com/run';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        // Try to parse the error text in case the server sends a JSON error response
        try {
            const errorJson = JSON.parse(errorText);
            throw new Error(errorJson.error || `Server responded with ${response.status}`);
        } catch (e) {
            // If it's not JSON, use the raw text
            throw new Error(`Server responded with ${response.status}: ${errorText || 'No error message'}`);
        }
    }

    const result = await response.json();

    // The server should return the correct { output, error } structure.
    // Ensure that empty strings are treated as null for consistency with the UI.
    return {
        output: result.output || null,
        error: result.error || null,
    };

  } catch (e) {
    console.error("SkibidiLang server request failed:", e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown network error occurred.';
    return {
      output: null,
      error: `Connection Error 🚽: Could not connect to the SkibidiLang server. Please try again later. (${errorMessage})`,
    };
  }
};
