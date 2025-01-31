## Comment lancer le projet

D'abord, ouvrez un terminal et lancez les commandes suivantes :

```bash
pnpm i
```

```bash
pnpm dev
```

Ensuite, ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

## Editer

### Metadata du site

Pour éditer les informations du site rendez-vous sur `src/lib/site.ts`

### Les propriétés

Pour éditer les propriétés rendez-vous sur `src/app/properties/contents`
Pour chaque nouvelle propriété, créez un nouveau fichier dans ce dossier avec le slug de la propriété ex. `villa-luxueuse-de-700-m4-a-bingerville.mdx` puis ajoutez le contenu de la page en vous référant à l'exemple de `villa-luxueuse-de-700-m4-a-bingerville.mdx`

Bon à savoir:

- Si le prix n'est pas renseigné, la propriété sera en mode "Prix sur demande"
- L'extension étant en `.mdx`, vous pouvez utiliser des composants react à l'intérieur de la page

### Pour editer le mdx

Pour editer le mdx je conseil l'extension [MDX for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

Pour voir les images je conseil l'extension [Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)

### Les images

Les images sont dans le dossier

- `public/properties` pour les images des propriétés
- `public/expertises` pour les images de la section expertises
- `public/contact` pour les images de la section contact
- `public/socials` pour les images de la section footer(réseaux sociaux)
- `public/services` pour les images de la section services

### Les données statiques du site

Pour les données statiques du site rendez-vous sur `src/lib/data.ts`

### Email

Pour activer l'envoi d'email, rendez-vous sur `.env`(renommer en `.env.example`) et remplissez les variables d'environnement `EMAIL_USER` et `EMAIL_PASSWORD` avec vos
identifiants gmail

### Comment déployer ?

Peut etre déployer sur Vercel Ou un VPS

1- Build le projet

```bash
pnpm run build
```

2-Copier les elements suivant dans le dossier de votre hebergeur

```bash
.next
public
package.json
pnpm-lock.yaml
server.js
next.config.ts
```

3-Créer votre application Nodejs puis en entré le `server.js`

Et voilà!
