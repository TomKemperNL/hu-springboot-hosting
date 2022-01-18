# Statisch hosten op Spring-Boot

Je kunt je front-end code in principe gewoon in Spring hosten.

Dat gaat ong. zo:

1. Zorg dat al je client-side code in ``src/main/resources/static`` staat (hetzij met een ``npm run build`` of gewoon een ordinaire CTRL-C/CTRL-V)
2. Start je Spring-Boot-applicatie
3. Ga naar http://localhost:8080 (of waar jouw applicatie ook tot leven komt)
4. ...
5. Profit!

Uiteraard kost het Spring-Boot iets meer moeite en CPU-cycles om je statische content te hosten dan bijv. een dedicated
webserver als Apache, maar het zal voor de meeste gevallen gewoon prima gaan werken.

Mocht je frontend uit één of ander ingewikkeld proces komen, vergeet dan niet je static map in je .gitignore te zetten,
want we willen uiteraard (liever) geen gegenereerde zaken in git inchecken.
