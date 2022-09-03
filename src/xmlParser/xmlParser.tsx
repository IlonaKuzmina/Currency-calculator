import { XMLParser } from 'fast-xml-parser'

const parseXmlToJs = (currency: string) => {
    const options = {
        ignoreAttributes: false,
        // attributeNamePrefix: "@_",
        attributesGroupName: "@_",
        ignoreDeclaration: true,
    }
    const parser = new XMLParser(options);
    let jObj = parser.parse(currency)

    console.log(jObj)
    // console.log(JSON.stringify(jObj))
}

export default parseXmlToJs;