<?php

class techController {
    public static function getTech() {
        
        // affiche la page "Accueil"
        $title = "Techniques d'autrefois - Boulange D'antan";
        
        Renderer::render("Views/tech.php", [
            "title" => $title
        ]);
    }
}