interface Structure {
    afficher(indent?: string): void;
  }
  
 
  class Employe implements Structure {
    constructor(private nom: string) {}
  
    afficher(indentation: string = ""): void {
      console.log("${indentation}- Employé : ${this.nom}");
    }
  }
  
  
  class Departement implements Structure {
    private enfants: Structure[] = [];
  
    constructor(private nom: string) {}
  
    ajouter(element: Structure): void {
      this.enfants.push(element);
    }
    afficher(indentation: string = ""): void {
      console.log(`${indentation}Département : ${this.nom}`);
      for (const enfant of this.enfants) {
        enfant.afficher(indentation + "  ");
         }
    }
  }
  
//exemple utilisation 
  const technique = new Departement("Département technique")
  const it = new Departement("IT")
  const web = new Departement("web")
  technique.ajouter(it)
  technique.ajouter(web)
  technique.afficher()


  const commercial = new Departement("Département commercial")
  const ventes = new Departement("Ventes")
  const achat = new Departement("Achats")

  commercial.ajouter(achat)
  commercial.ajouter(ventes)
  commercial.afficher()


  const financier = new Departement("Département Financier")
  const rh = new Departement("RH")
  const compta = new Departement("Comptabilité")
  const Admin = new Departement("Administration")

  financier.ajouter(rh)
  financier.ajouter(compta)
  financier.ajouter(Admin)
  financier.afficher()
