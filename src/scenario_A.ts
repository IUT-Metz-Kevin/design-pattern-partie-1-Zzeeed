class ParametresJeu {
    private static instance: ParametresJeu;    
    public difficulte: string;
    public langue: string;
    public volumeMusique: number;
    public volumeEffets: number;
    public resolutionEcran: string;
    public qualiteGraphique: string;

    private constructor() {
      this.difficulte = "normal";
      this.langue = "fr";
      this.volumeMusique = 30;
      this.volumeEffets = 60;
      this.resolutionEcran = "1920x1080";
      this.qualiteGraphique = "élevée";      
    }
   
    public static getInstance(): ParametresJeu {
      if (!ParametresJeu.instance) {
        ParametresJeu.instance = new ParametresJeu();
      }
      return ParametresJeu.instance;
    }
    public changerLangue(nouvelleLangue: string): void {
      this.langue = nouvelleLangue;
    }
    public reglerAudio(musique: number, effets: number): void {
      this.volumeMusique = musique;
      this.volumeEffets = effets;
    }
  }
  // Exemple d'utilisation dans le jeu
  const config1 = ParametresJeu.getInstance();
  config1.changerLangue("en");
  config1.reglerAudio(50, 60);
  console.log("Config 1 après modif",config1)

  console.log("-----------------------------------------------------------------------------------")

  const config2 = ParametresJeu.getInstance();
  config2.difficulte = "difficile";
  config2.qualiteGraphique ="élevée"
  config2.changerLangue("all")
  console.log("Config 2 après modif",config2)