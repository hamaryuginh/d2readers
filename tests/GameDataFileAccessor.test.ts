import * as chai from "chai";
import * as mocha from "mocha";
import { D2I, D2O } from "../src";

const expect = chai.expect;

before((done) => {
  D2O.register(
    { key: "mounts", path: "tests/fixtures/Mounts.d2o" },
    { key: "dungeons", path: "tests/fixtures/Dungeons.d2o" },
    { key: "items", path: "tests/fixtures/Items.d2o" },
    { key: "hintCategories", path: "tests/fixtures/HintCategory.d2o" },
    { key: "itemSets", path: "tests/fixtures/ItemSets.d2o" },
  );
  done();
});

describe("GameDataFileAccessor", () => {
  it("should have objects!", () => {
    expect(D2O._container["mounts"]._length).greaterThan(0);
    expect(D2O._container["dungeons"]._length).greaterThan(0);
    expect(D2O._container["items"]._length).greaterThan(0);
    expect(D2O._container["itemSets"]._length).greaterThan(0);
    expect(D2O._container["hintCategories"]._length).greaterThan(0);
  });
  it("should get object!", () => {
    const mount: any = D2O.getObject("mounts", 41);
    const res = expect(mount).to.exist;
    expect(mount.nameId).equal(59093);
  });
  it("should get object bis!", () => {
    const hintCategory: any = D2O.getObject("hintCategories", 9);
    const res = expect(hintCategory).to.exist;
    expect(hintCategory.nameId).equal(323562);
  });
  it("should get objects!", () => {
    const mounts: any[] = D2O.getObjects("mounts", null, 25);
    expect(mounts.length).equal(25);
    expect(mounts[24].id).equal(41);
    expect(mounts[24].nameId).equal(59093);
  });
  it("should map!", () => {
    const mounts = D2O.map("mounts", (e) => D2I.getText("fr", e.nameId));
    const dungeons = D2O.map("dungeons", (e) => D2I.getText("fr", e.nameId));
    const items = D2O.map("items", (e) => D2I.getText("fr", e.nameId));
    const itemSets = D2O.map("itemSets", (e) => D2I.getText("fr", e.nameId));

    expect(mounts[24]).equal("Dragodinde Amande et Pourpre");
    expect(dungeons[0]).equal("Donjon des Bouftous");
    expect(items[5]).equal("Puissante Epée d'Alle");
    expect(itemSets[58]).equal("Panoplie du Piou Bleu");
  });
});
