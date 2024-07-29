<div class="contact__wrapper">

    <h1>Contact</h1>
    <p>Veuillez remplir ce formulaire si vous souhaitez contacter l'administrateur du site</p>

    <form method= "post" novalidate>
        <div class="input__wrapper">
            <label for = "email">Votre email</label>
            <input type = "email" id = "email" name = "email">
        </div>
        <div class="input__wrapper">
            <label for = "message">Votre message (1000 caractères maximum)</label>
            <textarea id = "message" name ="message" maxlength="1000"></textarea>
        </div>
        <input type="hidden" name="subject"/>
        <button type="submit">Envoyer</button>
    </form>
    <div class ="message__wrapper">
        
    </div>
</div>

<script src="Public/scripts/contact.js"></script>