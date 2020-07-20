//@ts-check
const Util = require("./util");

/**
 * An object that contains methods for managing properties of assets in the cms, essentially
 * anything that could be done through the Properties panel in the CMS UI.
 */
class AccessAssetProperties {

    constructor(api) {
        this._api = api;
    }    

    /**
     * @param {number[]} assetIds                            an array of the asset IDs to associate the given template ID with
     * @param {number} templateId                            the id of the template to associate. This value is ignored if isDeveloperTemplate param is true
     * @param {boolean=} isDeveloperTemplate                 use the special purpose developer template (defaults to false)
     * @param {Util.TemplateLanguageType=} templateLanguage  legacy support to specify the template language (defaults to TemplateLanguageType.CSharp)
     */
    async setTemplate(assetIds, templateId, isDeveloperTemplate=false, templateLanguage=0) {
        let request = {
            "assetIds" : assetIds,
            "templateId": templateId,
            "isDeveloperTemplate": isDeveloperTemplate,
            "templateLanguage": templateLanguage
        };
        return await Util.makeCall(this._api, "/AssetProperties/SetTemplate/", request);
    }

    /**
     * @param {number[]} assetIds                            an array of the asset IDs to associate the given template ID with
     * @param {number} workflowId                            the id of the template to associate. This value is ignored if isDeveloperTemplate param is true
     */
    async setWorkflow(assetIds, workflowId) {
        let request = {
            "assetIds" : assetIds,
            "workflowId": workflowId,
        };
        return await Util.makeCall(this._api, "/AssetProperties/SetWOrkflow/", request);
    }    

}

class SetTemplateRequest {
    constructor (assetIds, templateId, isDeveloperTemplate=true, templateLanguage=0) {
        this._assetIds = assetIds;
        this._templateId = templateId,
    }
}

module.exports = AccessAssetProperties;