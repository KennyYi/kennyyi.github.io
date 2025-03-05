/**
 * Generates flexbox styles in different formats.
 * @param {"css" | "scss" | "styled-components"} styleType - The type of style format to generate.
 * @param {{
*   flexDirection?: string,
*   flexWrap?: string,
*   justifyContent?: string,
*   alignItems?: string,
*   alignContent?: string,
*   gap?: string
* }} flexStyle - An object containing flexbox properties.
* @returns {string} The generated style code.
*/

export type CodeStyle = "css" | "styled-components" | "tailwind";

const generateCss = (properties: Record<string, any>): string => {
    return ".container {\n"+Object.entries(properties).map(([key, value]) => `    ${key}: ${value};`).join('\n')+"\n`}";
}

const generateStyledComponents = (properties: Record<string, any>): string => {
    return "const Container = styled.div`\n"+Object.entries(properties).map(([key, value]) => `    ${key}: ${value};`).join('\n')+"\n`}";
}

export const generateFlexCode = (codeStyle: CodeStyle, properties: Record<string, any>) => {
    
    switch (codeStyle) {
        case 'css':
            return generateCss(properties);
        case 'styled-components':
            return generateStyledComponents(properties);
        default:
            throw new Error('Unsupported style type');
    }
};
