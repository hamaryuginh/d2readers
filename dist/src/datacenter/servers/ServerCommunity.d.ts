export default class ServerCommunity {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    shortId: string;
    defaultCountries: string[];
    supportedLangIds: number[];
    namingRulePlayerNameId: number;
    namingRuleGuildNameId: number;
    namingRuleAllianceNameId: number;
    namingRuleAllianceTagId: number;
    namingRulePartyNameId: number;
    namingRuleMountNameId: number;
    namingRuleNameGeneratorId: number;
    namingRuleAdminId: number;
    namingRuleModoId: number;
}
