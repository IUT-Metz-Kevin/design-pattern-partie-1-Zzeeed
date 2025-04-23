interface Personnage {
    attaquer(): void;
  }
  
    class Mage implements Personnage {
    attaquer(): void {
      console.log("Je suis le mage et j'envoie un sort Abracadabra !");
    }
  }
  
  class Guerrier implements Personnage {
    attaquer(): void {
      console.log("Je suis un barbare et je vous assène un coup d'épée !");
    }
  }
  
  class Archer implements Personnage {
    attaquer(): void {
      console.log("Je suis un archer et je vous tire dessus à l'arc !");
    }
  }
  
  class PersonnageFactory {
    static creerPersonnage(type: string): Personnage {
      switch (type.toLowerCase()) {
        case "mage":
          return new Mage();
        case "guerrier":
          return new Guerrier();
        case "archer":
          return new Archer();
        default:
          throw new Error("Type de personnage inconnu");
      }
    }
  }
  
  const guerrier = PersonnageFactory.creerPersonnage("guerrier");
  guerrier.attaquer();
  const archer = PersonnageFactory.creerPersonnage("archer");
  archer.attaquer();
  const mage = PersonnageFactory.creerPersonnage("mage");
  mage.attaquer();
  