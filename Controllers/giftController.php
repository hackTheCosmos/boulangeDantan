<?php

class giftController {
    public static function getGift () {

        $title = "Faire un don - Boulange D'antan";
        
        Renderer::render("Views/don.php", [
            "title" => $title
        ]);
    }
}