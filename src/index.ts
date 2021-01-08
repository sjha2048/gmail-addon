export function buildAddOn() {
    var html = HtmlService.createTemplateFromFile("index").evaluate().getContent();
    return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('sample'))
    .addSection(CardService.newCardSection().addWidget(CardService.newKeyValue().setContent(html)))
    .build();
  }