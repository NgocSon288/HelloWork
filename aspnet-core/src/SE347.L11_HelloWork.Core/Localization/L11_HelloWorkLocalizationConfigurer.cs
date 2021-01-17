using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace SE347.L11_HelloWork.Localization
{
    public static class L11_HelloWorkLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(L11_HelloWorkConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(L11_HelloWorkLocalizationConfigurer).GetAssembly(),
                        "SE347.L11_HelloWork.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
