import * as chai from "chai";
import * as mocha from "mocha";
import D2I from "../src/I18nFileAccessor";

const expect = chai.expect;

before((done) => {
  D2I.register({key: "fr", path: "tests/fixtures/i18n_fr.d2i"});
  done();
});

describe("I18nFileAccessor", () => {
  it("should have _stream!", () => {
    const res = expect(D2I._container["fr"]._stream).to.exist;
  });
  it("should have _unDiacriticalIndex!", () => {
    const res = expect(D2I._container["fr"]._unDiacriticalIndex).to.exist;
  });
  it("should have _indexes!", () => {
    const res = expect(D2I._container["fr"]._indexes).to.exist;
  });
  it("should have _textIndexes!", () => {
    const res = expect(D2I._container["fr"]._textIndexes).to.exist;
  });
  it("should have _textIndexesOverride!", () => {
    const res = expect(D2I._container["fr"]._textIndexesOverride).to.exist;
  });
  it("should have _textSortIndex!", () => {
    const res = expect(D2I._container["fr"]._textSortIndex).to.exist;
  });
  it("should have _textCount!", () => {
    const res = expect(D2I._container["fr"]._textCount).to.exist;
    const res2 = expect(D2I._container["fr"]._textCount).greaterThan(0);
  });
  it("should override id!", () => {
    const res = expect(D2I.overrideId).to.exist;
  });
  it("should get order index!", () => {
    const res = expect(D2I.getOrderIndex).to.exist;
  });
  it("should get text!", () => {
    const res = expect(D2I.getText).to.exist;
  });
  it("should get undiacritical text!", () => {
    const res = expect(D2I.getUnDiacriticalText).to.exist;
  });
  it("should verify if text exists!", () => {
    const res = expect(D2I.hasText).to.exist;
  });
  it("should get named text!", () => {
    const res = expect(D2I.getNamedText).to.exist;
  });
  it("should verify if named text exists!", () => {
    const res = expect(D2I.hasNamedText).to.exist;
  });
  it("should use direct buffer!", () => {
    const res = expect(D2I.useDirectBuffer).to.exist;
  });
  it("should get texts!", () => {
    expect(D2I.getTexts("fr", null, 5).length).equal(5);
    expect(D2I.getTexts("fr", (e) => e.text.indexOf("Dragodinde") > -1 && e.text.length < 40, 1)[0].text.indexOf("Dragodinde")).not.equal(-1);
  });
});
