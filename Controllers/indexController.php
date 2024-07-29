<?php

class indexController {
    public static function getIndex() {
        
        // affiche la page "Accueil"
        $title = "Accueil - Boulange D'antan";
        
        Renderer::render("Views/accueil.php", [
            "title" => $title
        ]);
    }

    public static function getCgu() {
        
        // affiche la page "Accueil"
        $title = "CGU - Boulange D'antan";
        
        Renderer::render("Views/cgu.php", [
            "title" => $title
        ]);
    }
}