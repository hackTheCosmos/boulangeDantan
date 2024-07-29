<?php

class jobController {
    public static function getJob() {
        
        // affiche la page "Accueil"
        $title = "Paysan boulanger - Boulange D'antan";
        
        Renderer::render("Views/job.php", [
            "title" => $title
        ]);
    }
}