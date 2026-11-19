---
sidebar_position: 0
---

# Construire l'application mobile

L'application est distribuée en RDC sous forme de fichier APK. Les outils testés sont Node.js 24, le JDK 17, Gradle 8.0.1 et un émulateur Android 14 (API 34).

## Configuration

Dans le dépôt [coach-mobile](https://github.com/coach-digital-rdc/coach-mobile), créez le fichier `.env` à partir de `.env.example` :

```bash
# Adresse de l'API
API_URL=https://votre-serveur/api
LOGIN_MODE=OTP
# Grille RDC préchargée au premier démarrage, pour un usage hors ligne avant la première synchronisation
SEEDS=SEED_CD_INSERT_COMPETENCIES,SEED_CD_INSERT_QUESTIONS,SEED_CD_INSERT_CHECKLIST,SEED_CD_INSERT_PDP_RULE_SET,SEED_CD_INSERT_PDP_LIBRARY
```

L'application (identifiant `com.coachdigital.rdc`, nom « Coach RDC ») est en français par défaut, l'anglais restant disponible, et embarque le manuel d'utilisation RDC.

## Développement

```bash
npm install
npm start          # Metro, port 8081
npm run android    # dans un second terminal
```

Sans Watchman, Metro peut s'arrêter sur l'erreur `EMFILE: too many open files, watch` : lancez-le avec `CI=true npm start` (sans surveillance des fichiers) ou installez Watchman.

## Clé de signature

Android exige que l'APK soit signé. Générez une fois la clé du projet, et conservez-la en lieu sûr : toutes les mises à jour devront être signées avec elle.

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore coach-rdc.keystore -alias coach-rdc -keyalg RSA -keysize 2048 -validity 10000
```

Placez le fichier dans `android/app`, puis renseignez dans `~/.gradle/gradle.properties` (jamais dans le dépôt) :

```bash
MYAPP_UPLOAD_STORE_FILE=coach-rdc.keystore
MYAPP_UPLOAD_KEY_ALIAS=coach-rdc
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

et déclarez la signature `release` dans `android/app/build.gradle` :

```groovy
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```

## Construire l'APK

```bash
cd android
CI=true ./gradlew assembleRelease
```

L'APK, qui contient tout le code JavaScript, se trouve dans `android/app/build/outputs/apk/release/app-release.apk`. Pour l'installer sur un appareil branché : `adb install -r app-release.apk`.
