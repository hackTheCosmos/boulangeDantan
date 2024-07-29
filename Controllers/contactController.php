<?php

class contactController {
    public static function getContact() {
        
        // affiche la page "Contact"
        $title = "Contact - Boulange D'antan";
        
        Renderer::render("Views/contact.php", [
            "title" => $title
        ]);
    }
}