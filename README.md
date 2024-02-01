# 🏨 Système de Réservation d'Hôtel

## 1. 📌 Contexte

Un hôtel souhaite moderniser son système de réservation en mettant en place une nouvelle solution numérique. Ce projet vise à développer une première version du système qui facilitera la gestion des réservations et la communication avec les clients.

## 2. 📑 Spécifications Fonctionnelles

### 2.1 Hôtel 🏢

- **Lister les clients** 📋: Permet à l'hôtel de voir tous ses clients.
- **Récupérer les informations d'un client** 🔍: Accès aux détails d'un client spécifique.
- **Ajouter un client** ➕: Inscription d'un nouveau client dans le système.
- **Modifier les informations d'un client** ✏️: Mise à jour des données client.
- **Réserver une chambre** 🛌: Attribution d'une chambre à un client.
- **Annuler une réservation** ❌: Suppression d'une réservation existante.

> ℹ️ **Note:** Actions simulées, retourne un message de confirmation sans modifier les données réelles.

### 2.2 Clients 🧑‍💼

- **Récupérer les informations de l’hôtel** 🏨: Accès aux détails de l'hôtel.
- **Lister toutes les chambres** 📋: Visualisation de toutes les chambres disponibles.
- **Récupérer les informations d'une chambre spécifique** 🔍: Détails sur une chambre en particulier.
- **Réserver une chambre** 🛌: Permet à un client de faire une réservation.
- **Annuler sa réservation** ❌: Permet à un client d'annuler sa réservation.

> ℹ️ **Note:** Actions simulées, retourne un message de confirmation sans modifier les données réelles.

## 3. 🗄 Assets Fournis

Pour la réalisation de ce projet, l’hôtel met à disposition des fichiers .json représentant sa base de données :

- **hotel.json** : Contient les informations relatives à l'hôtel.
- **clients.json** : Contient les informations sur les clients.

## 4. 🚀 Pour Commencer

Pour utiliser ce système, assurez-vous de disposer d'un environnement de développement adéquat et de suivre les instructions de mise en place spécifiques à votre environnement.

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur
npm start
