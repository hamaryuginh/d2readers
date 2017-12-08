import * as chai from "chai";
import * as mocha from "mocha";
import D2I from "../src/I18nFileAccessor";

const expect = chai.expect;

const d2i = new D2I();

before((done) => {
  d2i.register({key: "fr", path: "tests/fixtures/i18n_fr.d2i"});
  done();
});

describe("I18nFileAccessor", () => {
  it("should have _stream!", () => {
    const res = expect(d2i._container["fr"]._stream).to.exist;
  });
  it("should have _unDiacriticalIndex!", () => {
    const res = expect(d2i._container["fr"]._unDiacriticalIndex).to.exist;
  });
  it("should have _indexes!", () => {
    const res = expect(d2i._container["fr"]._indexes).to.exist;
  });
  it("should have _textIndexes!", () => {
    const res = expect(d2i._container["fr"]._textIndexes).to.exist;
  });
  it("should have _textIndexesOverride!", () => {
    const res = expect(d2i._container["fr"]._textIndexesOverride).to.exist;
  });
  it("should have _textSortIndex!", () => {
    const res = expect(d2i._container["fr"]._textSortIndex).to.exist;
  });
  it("should have _textCount!", () => {
    const res = expect(d2i._container["fr"]._textCount).to.exist;
    const res2 = expect(d2i._container["fr"]._textCount).greaterThan(0);
  });
  it("should override id!", () => {
    const res = expect(d2i.overrideId).to.exist;
  });
  it("should get order index!", () => {
    const res = expect(d2i.getOrderIndex).to.exist;
  });
  it("should get text!", () => {
    const res = expect(d2i.getText).to.exist;
  });
  it("should get undiacritical text!", () => {
    const res = expect(d2i.getUnDiacriticalText).to.exist;
  });
  it("should verify if text exists!", () => {
    const res = expect(d2i.hasText).to.exist;
  });
  it("should get named text!", () => {
    const res = expect(d2i.getNamedText).to.exist;
  });
  it("should verify if named text exists!", () => {
    const res = expect(d2i.hasNamedText).to.exist;
  });
  it("should use direct buffer!", () => {
    const res = expect(d2i.useDirectBuffer).to.exist;
  });
  it("should get texts!", () => {
    expect(d2i.getTexts("fr", null, 5).length).equal(5);
    expect(d2i.getTexts("fr", (e) => e.text.indexOf("Dragodinde") > -1 && e.text.length < 40, 1)[0].text.indexOf("Dragodinde")).not.equal(-1);
  });
});
