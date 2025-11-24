1.Smart Recipe Generator  
_A simple yet powerful web application that recommends recipes based on the ingredients you have._



## 2. Overview

Smart Recipe Generator is a full-stack project designed to help users quickly find recipes they can cook using the ingredients available at home.  
Instead of browsing hundreds of recipes online, you simply enter a few ingredients — and the system intelligently filters, matches and suggests recipes.

This project includes:
- A clean and responsive frontend UI  
- A Node.js + Express backend  
- Ingredient-based recipe matching  
- Recipe creation feature (Add Recipe)  
- Smart filter system  

---

## 3. Key Features

###  Ingredient-Based Search  
Users can type multiple ingredients (comma separated) and instantly see recipes that use those ingredients.

###  Smart Matching Engine  
The backend compares user-provided ingredients with stored recipes and ranks them based on:
- Number of matching ingredients  
- Missing ingredient count  
- Relevance score  

### Add New Recipes  
Through **AddRecipe.jsx**, users can add:
- Recipe Name  
- List of Ingredients  
- Instructions / Steps  

The data is stored in the backend database.

###  Clean UI + Smooth Workflow  
The homepage displays your search bar and recipe list in a neat layout.  
The Add Recipe page provides a simple form to create new recipes easily.



##  Tech Stack

### **Frontend**
- React.js  
- Axios  
- CSS  

### **Backend**
- Node.js  
- Express  
- Custom matching algorithm  



