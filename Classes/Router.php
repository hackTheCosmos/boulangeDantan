<?php

class Router {
    
    public static function route(): void {
        if (isset($_GET['page'])) {
            
            
            // --------------------------------- FRONT OFFICE--------------------------------------------------
            
            //page d'acceuil
            if ($_GET['page'] == "accueil") {
                    indexController::getIndex();
            }

            //page paysan-boulanger
            if ($_GET['page'] == "paysan-boulanger") {
                jobController::getJob();
            }

             //page techniques
             if ($_GET['page'] == "techniques") {
                techController::getTech();
            }

            //page cgu
            if($_GET['page']== "cgu") {
                indexController::getCgu();
            }

            //page cgu
            if($_GET['page']== "contact") {
                contactController::getContact();
            }

            //page faire un don
            if ($_GET['page'] == "faire-un-don") {
                giftController::getGift();
            }


            
            
            // -----------------------------------------------------------------------------------------------------------

        } else {
            // Défaut
            indexController::getIndex();
        }
    }
}
