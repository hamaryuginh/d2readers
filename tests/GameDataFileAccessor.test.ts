import * as chai from "chai";
import * as path from "path";
import { D2I, D2O, Datacenter } from "../src";

const { Mount, HintCategory, Dungeon, Item, ItemSet, Weapon } = Datacenter;
const expect = chai.expect;

before(done => {
  D2O.init(path.join(__dirname, "fixtures"));
  done();
});

describe("GameDataFileAccessor", () => {
  it("should have readers!", () => {
    expect(D2O["_readers"].size).greaterThan(0);
  });
  it("should have objects", () => {
    expect(D2O["_readers"].get(Mount.name)["indexes"].size).greaterThan(0);
    expect(D2O["_readers"].get(Dungeon.name)["indexes"].size).greaterThan(0);
    expect(D2O["_readers"].get(Item.name)["indexes"].size).greaterThan(0);
    expect(D2O["_readers"].get(ItemSet.name)["indexes"].size).greaterThan(0);
    expect(D2O["_readers"].get(HintCategory.name)["indexes"].size).greaterThan(
      0
    );
  });
  it("should have classDefinitions", () => {
    expect(D2O["_readers"].get(Mount.name).classes.size).equal(4);
    expect(D2O["_readers"].get(Dungeon.name).classes.size).equal(1);
    expect(D2O["_readers"].get(Item.name).classes.size).equal(5);
    expect(D2O["_readers"].get(ItemSet.name).classes.size).equal(4);
    expect(D2O["_readers"].get(HintCategory.name).classes.size).equal(1);
  });
  it("should not have readers of classes present in many .d2o", () => {
    expect(D2O["_readers"].get(Datacenter.EffectInstance.name)).equal(
      undefined
    );
    expect(D2O["_readers"].get(Datacenter.EffectInstanceInteger.name)).equal(
      undefined
    );
    expect(D2O["_readers"].get(Datacenter.EffectInstanceDice.name)).equal(
      undefined
    );
  });
  it("should get object!", () => {
    const mount = D2O.getObject(Mount, 41);
    const hintCategory = D2O.getObject(HintCategory, 9);
    const res1 = expect(mount).to.exist;
    const res2 = expect(hintCategory).to.exist;
    expect(mount.nameId).equal(59093);
    expect(hintCategory.nameId).equal(323562);
  });
  it("getObject should return the right object type", () => {
    const item = D2O.getObject(Item, 44);
    expect(item instanceof Item).equal(true);
    expect(item instanceof Weapon).equal(true);
    if (item instanceof Weapon) {
      expect((item as Datacenter.Weapon).apCost).equal(3);
    }
  });
  it("should get objects!", () => {
    const mounts = D2O.getObjects(Mount, null, 25);
    expect(mounts.length).equal(25);
    expect(mounts[24].id).equal(41);
    expect(mounts[24].nameId).equal(59093);
  });
  it("should map!", () => {
    const mounts = D2O.map(Mount, e => D2I.getText("fr", e.nameId));
    const dungeons = D2O.map(Dungeon, e => D2I.getText("fr", e.nameId));
    const items = D2O.map(Item, e => D2I.getText("fr", e.nameId));
    const itemSets = D2O.map(ItemSet, e => D2I.getText("fr", e.nameId));

    expect(mounts[24]).equal("Dragodinde Amande et Pourpre");
    expect(dungeons[0]).equal("Donjon des Bouftous");
    expect(items[5]).equal("Puissante Epée d'Alle");
    expect(itemSets[58]).equal("Panoplie du Piou Bleu");
  });
  it("should get class definition", () => {
    const classDefinition = D2O["_readers"].get("Item").classes.get(5);
    const assert = expect(classDefinition).to.not.be.undefined;
  });
  it("should get all class definitions of a d2o!", () => {
    const classDefinitionCount = D2O["_readers"].get("Item").classes.size;
    expect(classDefinitionCount).greaterThan(1);
  });
});
