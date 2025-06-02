
// import '/index.css';
// import { createElement } from "./component.js";
// import './im.png';

// const data = [
//   { tite: "message", icon: "fa-solid fa-envelope" },
//   { tite: "groupe", icon: "fa-solid fa-user-group" },
//   { tite: "diffusions", icon: "fa-solid fa-arrows-turn-to-dots" },
//   { tite: "archive", icon: "fa-solid fa-box-archive" },
//   { tite: "ajouter", icon: "fa-solid fa-plus" },
// ];

// const haut = [
//   { icon: "fa-solid fa-delete-left", title: "Fermer", color: "orange" },
//   { icon: "fa fa-archive", title: "Archiver", color: "gray" },
//   { icon: "fa fa-square", title: "Noir", color: "black" },
//   { icon: "fa fa-trash", title: "Supprimer", color: "red" }
// ];

// const Liste = [
//   { prenom: "John", name: "Doe", contact: "+221771234567", photo: null },
//   { prenom: "Jane", name: "Smith", contact: "+221771234568", photo: null },
//   { prenom: "Bob", name: "Johnson", contact: "+221771234569", photo: null }
// ];

// const groupes = [
//   { 
//     id: 1, 
//     nom: "Famille", 
//     description: "Groupe familial", 
//     adminTel: "+221771234567", 
//     membres: ["+221771234567", "+221771234568"], 
//     admins: ["+221771234567"] 
//   },
//   { 
//     id: 2, 
//     nom: "Travail", 
//     description: "Équipe de travail", 
//     adminTel: "+221771234569", 
//     membres: ["+221771234567", "+221771234568", "+221771234569"], 
//     admins: ["+221771234569"] 
//   }
// ];

// const isAdmin = true;

// let groupesArchives = []; 
// let showingArchives = false;
// let currentView = 'discussions';

// // Variables pour les vues détaillées
// let selectedContact = null;
// let selectedGroupe = null;

// let currentUser = null;
// let users = [];
// let messages = [];
// let currentRoom = 'general';

// // Données pour la navigation


// // Variables pour les composants de l'interface
// let centerColumn = null;
// let navBar = null;
// let defaultMessagesArea = null;
// let sms = null;


// // Validation email
// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// // Validation contact (numéro de téléphone basique)
// function isValidContact(contact) {
//   const contactRegex = /^[\d\s\-\(\)\+]{8,}$/;
//   return contactRegex.test(contact);
// }

// function showAuthForm() {
//   // Vider complètement le body d'abord
//   document.body.innerHTML = "";
  
//   const root = createElement("div", {
//     class: ["min-h-screen", "bg-gradient-to-br", "from-blue-50", "to-indigo-100", "flex", "items-center", "justify-center", "p-8"],
//   });
//   root.id = "root";
//   document.body.appendChild(root);

//   const nom = createElement("input", {
//     class: ["border", "border-gray-300", "p-3", "rounded-lg", "w-full", "focus:ring-2", "focus:ring-orange-500", "focus:border-transparent", "transition"],
//     placeholder: "Nom"
//   });
  
//   const prenom = createElement("input", {
//     class: ["border", "border-gray-300", "p-3", "rounded-lg", "w-full", "focus:ring-2", "focus:ring-orange-500", "focus:border-transparent", "transition"],
//     placeholder: "Prénom"
//   });
  
//   const email = createElement("input", {
//     class: ["border", "border-gray-300", "p-3", "rounded-lg", "w-full", "focus:ring-2", "focus:ring-orange-500", "focus:border-transparent", "transition"],
//     placeholder: "Email",
//     type: "email"
//   });
  
//   const contact = createElement("input", {
//     class: ["border", "border-gray-300", "p-3", "rounded-lg", "w-full", "focus:ring-2", "focus:ring-orange-500", "focus:border-transparent", "transition"],
//     placeholder: "Contact (ex: +33123456789)"
//   });

//   const btn = createElement("button", {
//     class: ["bg-gradient-to-r", "from-black", "to-red-500", "text-white", "p-3", "rounded-lg", "w-full", "mt-6", "hover:from-orange-600", "hover:to-red-600", "transform", "hover:scale-105", "transition", "duration-200", "font-semibold", "shadow-lg"],
//     text: "Se Connecter / S'inscrire",
//     onclick: () => handleAuth(nom, prenom, email, contact)
//   });

//   const errorBox = createElement("div", { 
//     class: ["text-red-600", "text-sm", "mt-2", "p-2", "rounded", "bg-red-50", "border", "border-red-200", "hidden"], 
//     id: "error-box" 
//   });

//   const title = createElement("h1", {
//     class: ["text-3xl", "font-bold", "text-gray-800", "mb-8", "text-center"],
//     text: "Bienvenue sur ChatApp"
//   });

//   const subtitle = createElement("p", {
//     class: ["text-gray-600", "text-center", "mb-6"],
//     text: "Connectez-vous pour commencer à discuter"
//   });

//   const form = createElement("div", {
//     class: ["bg-white", "p-8", "rounded-xl", "shadow-2xl", "space-y-4", "w-full", "max-w-md"]
//   }, [title, subtitle, nom, prenom, email, contact, errorBox, btn]);

//   root.appendChild(form);
// }

// function handleAuth(nom, prenom, email, contact) {
//   clearError();
  
//   // Validation des champs
//   if (!nom.value.trim() || !prenom.value.trim() || !email.value.trim() || !contact.value.trim()) {
//     showError("Tous les champs sont requis.");
//     return;
//   }

//   if (!isValidEmail(email.value.trim())) {
//     showError("Veuillez entrer un email valide.");
//     return;
//   }

//   if (!isValidContact(contact.value.trim())) {
//     showError("Veuillez entrer un numéro de contact valide.");
//     return;
//   }

//   const user = {
//     id: Date.now(),
//     nom: nom.value.trim(),
//     prenom: prenom.value.trim(),
//     email: email.value.trim(),
//     contact: contact.value.trim(),
//     joinedAt: new Date().toISOString()
//   };

//   const existing = users.find(u => u.email === user.email);
//   if (!existing) {
//     users.push(user);
//     addSystemMessage(`${user.prenom} ${user.nom} a rejoint le chat`);
//   } else {
//     addSystemMessage(`${existing.prenom} ${existing.nom} s'est reconnecté`);
//   }

//   currentUser = existing || user;
//   showApp();
// }

// function showError(msg) {
//   const errorBox = document.getElementById("error-box");
//   if (errorBox) {
//     errorBox.textContent = msg;
//     errorBox.classList.remove("hidden");
//   }
// }

// function clearError() {
//   const errorBox = document.getElementById("error-box");
//   if (errorBox) {
//     errorBox.classList.add("hidden");
//   }
// }

// function addSystemMessage(text) {
//   messages.push({
//     id: Date.now(),
//     type: 'system',
//     text: text,
//     timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
//     room: currentRoom
//   });
// }

// function addMessage(text, user = currentUser) {
//   if (!text.trim()) return;
  
//   messages.push({
//     id: Date.now(),
//     type: 'user',
//     text: text.trim(),
//     user: user,
//     timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
//     room: currentRoom
//   });
// }

// function createMessage(message) {
//   if (message.type === 'system') {
//     return createElement("div", {
//       class: ["flex", "justify-center", "my-2"]
//     }, [
//       createElement("span", {
//         class: ["text-xs", "text-gray-500", "bg-gray-100", "px-3", "py-1", "rounded-full"],
//         text: `${message.text} - ${message.timestamp}`
//       })
//     ]);
//   }

//   const isCurrentUser = message.user.id === currentUser.id;
  
//   return createElement("div", {
//     class: ["flex", "mb-4", isCurrentUser ? "justify-end" : "justify-start"]
//   }, [
//     createElement("div", {
//       class: [ "px-4", "py-2", "rounded-lg", 
//               isCurrentUser ? "bg-orange-500" : "bg-white", 
//               isCurrentUser ? "text-white" : "text-gray-800",
//               "shadow-md"]
//     }, [
//       !isCurrentUser ? createElement("div", {
//         class: ["text-xs", "font-semibold", "text-orange-600", "mb-1"],
//         text: `${message.user.prenom} ${message.user.nom}`
//       }) : null,
//       createElement("p", {
//         class: ["text-sm"],
//         text: message.text
//       }),
//       createElement("p", {
//         class: ["text-xs", "mt-1", "opacity-70"],
//         text: message.timestamp
//       })
//     ].filter(Boolean))
//   ]);
// }

// function createChatArea() {
//   const chatMessages = createElement("div", {
//     class: ["flex-1", "overflow-y-auto", "p-4", "space-y-2"],
//     id: "chat-messages"
//   });

//   const messageInput = createElement("input", {
//     class: ["flex-1", "border", "border-gray-300", "rounded-lg", "px-4", "py-2", "focus:ring-2", "focus:ring-orange-500", "focus:border-transparent"],
//     placeholder: "Tapez votre message...",
//     type: "text"
//   });

//   const sendButton = createElement("button", {
//     class: ["bg-orange-500", "text-white", "px-6", "py-2", "rounded-lg", "hover:bg-orange-600", "transition", "ml-2", "font-medium"],
//     text: "Envoyer",
//     onclick: () => sendMessage(messageInput, chatMessages)
//   });

//   // Envoyer avec Entrée
//   messageInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//       sendMessage(messageInput, chatMessages);
//     }
//   });

//   const inputArea = createElement("div", {
//     class: ["p-4", "border-t", "border-gray-200", "flex", "items-center"]
//   }, [messageInput, sendButton]);

//   return createElement("div", {
//     class: ["flex", "flex-col", "h-full"]
//   }, [chatMessages, inputArea]);
// }

// function sendMessage(input, chatContainer) {
//   const text = input.value;
//   if (!text.trim()) return;

//   addMessage(text);
//   input.value = "";
//   updateChatDisplay(chatContainer);
  
//   // Auto-scroll vers le bas
//   setTimeout(() => {
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   }, 100);
// }

// function updateChatDisplay(chatContainer) {
//   const currentRoomMessages = messages.filter(m => m.room === currentRoom);
//   chatContainer.innerHTML = "";
  
//   currentRoomMessages.forEach(message => {
//     chatContainer.appendChild(createMessage(message));
//   });
// }

// function createUsersList() {
//   const onlineUsers = createElement("div", {
//     class: ["p-4"]
//   }, [
//     createElement("h3", {
//       class: ["font-semibold", "text-gray-700", "mb-3"],
//       text: "Utilisateurs connectés"
//     }),
//     createElement("div", {
//       class: ["space-y-2"],
//       id: "users-list"
//     })
//   ]);

//   updateUsersList();
//   return onlineUsers;
// }

// // Fonctions de navigation
// function showDiscussion() {
//   updateCenterColumn("Discussion", createChatArea());
// }

// function addContactForm() {
//   const form = createElement("div", {
//     class: ["p-6", "space-y-4"]
//   }, [
//     createElement("h3", {
//       class: ["text-lg", "font-semibold", "text-gray-800", "mb-4"],
//       text: "Ajouter un contact"
//     }),
//     createElement("input", {
//       class: ["w-full", "border", "border-gray-300", "rounded-lg", "p-3", "focus:ring-2", "focus:ring-orange-500"],
//       placeholder: "Nom du contact"
//     }),
//     createElement("input", {
//       class: ["w-full", "border", "border-gray-300", "rounded-lg", "p-3", "focus:ring-2", "focus:ring-orange-500"],
//       placeholder: "Email du contact"
//     }),
//     createElement("button", {
//       class: ["bg-orange-500", "text-white", "px-6", "py-2", "rounded-lg", "hover:bg-orange-600", "transition"],
//       text: "Ajouter"
//     })
//   ]);
//   updateCenterColumn("Ajouter Contact", form);
// }

// function showGroupes() {
//   const groupsList = createElement("div", {
//     class: ["p-6"]
//   }, [
//     createElement("h3", {
//       class: ["text-lg", "font-semibold", "text-gray-800", "mb-4"],
//       text: "Mes Groupes"
//     }),
//     createElement("div", {
//       class: ["space-y-3"]
//     }, [
//       createElement("div", {
//         class: ["bg-white", "p-4", "rounded-lg", "shadow", "border-l-4", "border-orange-500"],
//         text: "Groupe Famille"
//       }),
//       createElement("div", {
//         class: ["bg-white", "p-4", "rounded-lg", "shadow", "border-l-4", "border-blue-500"],
//         text: "Groupe Travail"
//       })
//     ])
//   ]);
//   updateCenterColumn("Groupes", groupsList);
// }

// function showArchives() {
//   const archives = createElement("div", {
//     class: ["p-6"]
//   }, [
//     createElement("h3", {
//       class: ["text-lg", "font-semibold", "text-gray-800", "mb-4"],
//       text: "Messages Archivés"
//     }),
//     createElement("p", {
//       class: ["text-gray-600"],
//       text: "Aucun message archivé pour le moment."
//     })
//   ]);
//   updateCenterColumn("Archives", archives);
// }

// function showDiffusion() {
//   const diffusion = createElement("div", {
//     class: ["p-6"]
//   }, [
//     createElement("h3", {
//       class: ["text-lg", "font-semibold", "text-gray-800", "mb-4"],
//       text: "Listes de Diffusion"
//     }),
//     createElement("button", {
//       class: ["bg-green-500", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-green-600", "transition"],
//       text: "Créer une liste"
//     })
//   ]);
//   updateCenterColumn("Diffusions", diffusion);
// }

// function updateUsersList() {
//   const usersList = document.getElementById("users-list");
//   if (!usersList) return;

//   usersList.innerHTML = "";
//   users.forEach(user => {
//     const userItem = createElement("div", {
//       class: ["flex", "items-center", "space-x-2", "p-2", "rounded", "hover:bg-gray-100"]
//     }, [
//       createElement("div", {
//         class: ["w-2", "h-2", "bg-green-500", "rounded-full"]
//       }),
//       createElement("span", {
//         class: ["text-sm", "text-gray-700"],
//         text: `${user.prenom} ${user.nom}`
//       }),
//       user.id === currentUser.id ? createElement("span", {
//         class: ["text-xs", "text-orange-500"],
//         text: "(Vous)"
//       }) : null
//     ].filter(Boolean));
    
//     usersList.appendChild(userItem);
//   });
// }

// function showApp() {
//   // Vider complètement le body d'abord
//   document.body.innerHTML = "";
  
//   const root = createElement("div", {
//     class: ["min-h-screen", "bg-gray-100"]
//   });
//   root.id = "root";
//   document.body.appendChild(root);

 
  
// // *********************************************


// // Fonction pour créer le bouton de déconnexion
// function createLogoutButton() {
//     return createElement("button", {
//       class: [
//         "bg-red-100",
//         "hover:bg-red-200",
//         "w-[80px]", "min-h-[60px]", "m-5", "mt-auto", "mb-5",
//         "flex", "flex-col", "items-center", "justify-center", "gap-1",
//         "border-2", "border-red-300", "rounded", "transition", "duration-200",
//         "cursor-pointer", "group"
//       ],
//       onclick: () => {
//         // Confirmation avant déconnexion
//         if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
//           handleLogout();
//         }
//       }
//     }, [
//       createElement("i", { 
//         class: ["fas", "fa-sign-out-alt", "text-red-600", "group-hover:text-red-700"] 
//       }),
//       createElement("span", { 
//         text: "Sortir",
//         class: ["text-xs", "text-red-600", "group-hover:text-red-700", "font-medium"]
//       })
//     ]);
//   }
  
//   // Fonction de gestion de la déconnexion
//   function handleLogout() {
//     // Animation de sortie
//     document.body.style.opacity = "0.5";
//     document.body.style.transition = "opacity 0.3s ease";
    
//     // Nettoyer les données locales si nécessaire
//     // localStorage.clear();
//     // sessionStorage.clear();
    
//     // Redirection vers la page de connexion après un délai
//     setTimeout(() => {
//       window.location.href = "/login.html"; // ou votre page de connexion
//       // ou window.location.replace("/login.html"); pour éviter le retour
//     }, 500);
//   }
  

// // *********************************************************************

// function showGroupes() {
//   currentView = 'groupes';
//   selectedGroupe = null;
//   let filtre = "";
//   let groupeActifId = null;

//   const inputSearch = createElement("input", {
//     type: "text",
//     placeholder: "Rechercher un groupe...",
//     class: [
//       "w-full", "px-4", "py-2", "rounded", "border",
//       "border-gray-300", "focus:outline-none",
//       "focus:ring-2", "focus:ring-blue-500", "mb-4"
//     ],
//     oninput: (e) => {
//       filtre = e.target.value.toLowerCase();
//       updateGroupList();
//     }
//   });

//   const groupContainer = createElement("div", {
//     class: ["space-y-4", "overflow-y-auto", "h-[400px]", "pr-2"]
//   });

//   function updateGroupList() {
//     groupContainer.replaceChildren(
//       ...groupes
//         .filter(g => g.nom.toLowerCase().includes(filtre))
//         .map(groupe => {
//           const isActif = groupe.id === groupeActifId;

//           const container = createElement("div", {
//             class: [
//               "relative", "overflow-hidden", "rounded", "bg-white",
//               "transition-all", "duration-300", "cursor-pointer",
//               isActif ? "bg-gray-100 shadow-md scale-[1.01]" : "hover:bg-gray-50"
//             ]
//           });

//           const content = createElement("div", {
//             class: ["p-3", "transition-transform", "duration-300", "group-content"]
//           }, [
//             createElement("div", { class: ["font-bold", "text-gray-800"] }, truncate(groupe.nom)),
//             createElement("div", { class: ["text-sm", "text-gray-500"] }, truncate(groupe.description || "")),
//             createElement("div", { class: ["text-xs", "text-gray-400", "mt-1", "flex", "items-center", "gap-1"] }, [
//               createElement("i", { class: ["fa-solid", "fa-users"] }),
//               `${groupe.membres ? groupe.membres.length : 0}`
//             ])
//           ]);

//           const actionBtns = isAdmin ? createElement("div", {
//             class: ["absolute", "top-0", "right-0", "h-full", "flex", "items-center", "gap-2", "bg-gray-100", "px-3", "text-sm", "group-actions", "hidden"]
//           }, [
//             createElement("button", {
//               class: ["text-yellow-600", "hover:underline", "flex", "items-center", "gap-1"],
//               onclick: (e) => {
//                 e.stopPropagation();
//                 archiverGroupe(groupe.id);
//               }
//             }, [
//               createElement("i", { class: ["fa-solid", "fa-archive"] }),
//               "Archiver"
//             ])
//           ]) : null;

//           let startX = 0, currentX = 0, moved = false;

//           function onPointerDown(e) {
//             startX = e.clientX;
//             moved = false;
//             content.style.transition = "";
//             window.addEventListener("pointermove", onPointerMove);
//             window.addEventListener("pointerup", onPointerUp);
//             window.addEventListener("pointercancel", onPointerUp);
//           }

//           function onPointerMove(e) {
//             currentX = e.clientX;
//             const deltaX = currentX - startX;
//             if (deltaX < 0) {
//               e.preventDefault();
//               moved = true;
//               const translateX = Math.max(deltaX, -110);
//               content.style.transform = `translateX(${translateX}px)`;
//               if (actionBtns) actionBtns.classList.remove("hidden");
//             }
//           }

//           function onPointerUp() {
//             window.removeEventListener("pointermove", onPointerMove);
//             window.removeEventListener("pointerup", onPointerUp);
//             window.removeEventListener("pointercancel", onPointerUp);

//             if (!moved) {
//               content.style.transform = "translateX(0)";
//               if (actionBtns) actionBtns.classList.add("hidden");
//               // Clic simple - afficher les détails du groupe
//               showGroupeDetails(groupe);
//             } else {
//               if (currentX - startX <= -50) {
//                 content.style.transform = "translateX(-110px)";
//                 if (actionBtns) actionBtns.classList.remove("hidden");
//               } else {
//                 content.style.transform = "translateX(0)";
//                 if (actionBtns) actionBtns.classList.add("hidden");
//               }
//             }
//           }

//           content.addEventListener("pointerdown", onPointerDown);

//           container.addEventListener("click", (e) => {
//             if (!moved) {
//               groupeActifId = groupe.id;
//               updateGroupList();
//               // Afficher les détails du groupe au clic
//               showGroupeDetails(groupe);
//             }
//           });

//           container.append(content);
//           if (actionBtns) container.append(actionBtns);
//           return container;
//         })
//     );
//   }

//   function creerGroupeForm() {
//     const form = createElement("form", {
//       class: ["space-y-4", "bg-white", "p-4", "rounded", "shadow", "max-w-md", "mx-auto"]
//     });

//     const inputNom = createElement("input", {
//       type: "text",
//       placeholder: "Nom du groupe",
//       required: true,
//       class: ["w-full", "border", "border-gray-300", "rounded", "px-3", "py-2"]
//     });

//     const nomErreur = createElement("div", { class: ["text-red-500", "text-sm", "hidden"] });

//     const inputDescription = createElement("textarea", {
//       placeholder: "Description (optionnelle)",
//       class: ["w-full", "border", "border-gray-300", "rounded", "px-3", "py-2"]
//     });

//     const adminErreur = createElement("div", { class: ["text-red-500", "text-sm", "hidden"] });

//     const adminSelect = createElement("div", { class: ["space-y-2"] },
//       Liste.map(contact =>
//         createElement("label", { class: ["flex", "items-center", "gap-2"] }, [
//           createElement("input", {
//             type: "checkbox",
//             name: "admins",
//             value: contact.contact,
//             class: ["accent-blue-500"]
//           }),
//           createElement("span", {}, `${contact.prenom} ${contact.name}`)
//         ])
//       )
//     );

//     const submitBtn = createElement("button", {
//       type: "submit",
//       class: ["bg-black", "text-white", "px-2", "py-2", "rounded", "hover:bg-gray-800"]
//     }, "Créer le groupe");

//     form.append(
//       createElement("h2", { class: ["text-xl", "font-semibold"] }, "Créer un nouveau groupe"),
//       inputNom, nomErreur,
//       inputDescription,
//       createElement("h3", { class: ["font-medium", "mt-2"] }, "Administrateurs (1 ou 2 max)"),
//       adminSelect, adminErreur,
//       submitBtn
//     );

//     form.onsubmit = (e) => {
//       e.preventDefault();
//       nomErreur.classList.add("hidden");
//       adminErreur.classList.add("hidden");

//       const admins = Array.from(form.querySelectorAll("input[name='admins']:checked")).map(i => i.value);
//       if (admins.length === 0 || admins.length > 2) {
//         adminErreur.textContent = "Choisissez 1 ou 2 administrateurs.";
//         adminErreur.classList.remove("hidden");
//         return;
//       }

//       if (!inputNom.value.trim()) {
//         nomErreur.textContent = "Le nom du groupe est requis.";
//         nomErreur.classList.remove("hidden");
//         return;
//       }

//       const nouveauGroupe = {
//         id: Date.now(),
//         nom: inputNom.value.trim(),
//         description: inputDescription.value.trim(),
//         adminTel: admins.join(", "),
//         membres: [...admins],
//         admins: [...admins]
//       };

//       groupes.push(nouveauGroupe);
//       showGroupes();
//     };

//     centerColumn.replaceChildren(form);
//   }

//   const addGroupBtn = isAdmin ? createElement("button", {
//     class: ["bg-black", "text-white", "w-10", "h-10", "rounded-full", "items-center", "justify-center", "text-xl", "m-2", "absolute", "mt-[10px]",
//       "bg-[#757574]", "rounded-full", "cursor-pointer", "top-[100px]", "left-[570px]"],
//     title: "Créer un groupe",
//     onclick: creerGroupeForm
//   }, createElement("i", { class: ["fa-solid", "fa-plus", "text-white", "text-sm"] })) : null;

//   const archiveBtn = isAdmin ? createElement("button", {
//     class: ["bg-gray-700", "text-white", "ml-2", "px-3", "py-2", "rounded"],
//     title: "Voir les archives",
//     onclick: () => {
//       showingArchives = true;
//       showArchives();
//     }
//   }, "Archives") : null;

//   centerColumn.replaceChildren(
//     createElement("div", {
//       class: ["p-4", "h-full", "overflow-y-auto", "space-y-4"]
//     }, [
//       createElement("div", { class: ["flex", "justify-between", "items-center"] }, [
//         createElement("h2", { class: ["text-xl", "font-semibold"] }, "Groupes existants"),
//         createElement("div", { class: ["flex", "items-center"] }, [addGroupBtn])
//       ]),
//       inputSearch,
//       groupContainer
//     ])
//   );

//   updateGroupList();

//   function truncate(text) {
//     return text.length > 10 ? text.substring(0, 10) + "..." : text;
//   }
// }
// // Variables pour les groupes (à ajouter au début de votre fichier)
// let conversationsGroupes = {}; // Stocker les conversations par groupe
// let currentNavGroupe = null; // Variable pour stocker le groupe actuellement sélectionné pour la navbar
//  // Variable pour le groupe sélectionné

// // Fonction pour créer la barre de navigation avec infos du groupe
// function createNavBarGroupe(groupe = null) {
//   let profileContent, groupeInfo;
  
//   if (groupe) {
//     // Récupérer les deux premières lettres du nom du groupe
//     const firstLetter = (groupe.nom?.charAt(0) || '').toUpperCase();
//     const secondLetter = (groupe.nom?.charAt(1) || '').toUpperCase();
//     profileContent = firstLetter + secondLetter;
    
//     // Informations du groupe
//     groupeInfo = createElement("div", {
//       class: ["flex", "flex-col", "items-center", "text-center"]
//     }, [
//       createElement("div", {
//         class: ["font-semibold", "text-gray-800", "text-sm"]
//       }, groupe.nom),
//       createElement("div", {
//         class: ["text-xs", "text-gray-600"]
//       }, `${groupe.membres ? groupe.membres.length : 0} membre(s)`)
//     ]);
//   } else {
//     profileContent = "";
//     groupeInfo = null;
//   }

//   return createElement("div", {
//     class: [
//       "w-full", "h-[60px]", "border-b", "border-b-rose-50",
//       "bg-[#efe7d9]", "flex", "items-center", "justify-between", "px-4"
//     ]
//   }, [
//     // Section gauche avec profil et infos groupe
//     createElement("div", {
//       class: ["flex", "items-center", "gap-3"]
//     }, [
//       // Profil du groupe à gauche
//       createElement("div", {
//         class: [
//           "w-10", "h-10", "bg-[#757574]", "rounded-full", "cursor-pointer",
//           "flex", "items-center", "justify-center", "text-white", "font-bold", "text-sm"
//         ]
//       }, profileContent),
//       groupeInfo
//     ].filter(Boolean)),
    
//     // Boutons de navigation à droite
//     createElement("div", {
//       class: ["flex", "flex-row", "gap-3", "items-center"]
//     },
//       haut.map(item =>
//         createElement("button", {
//           class: [
//             "w-[40px]", "h-[40px]", "flex", "items-center", "justify-center",
//             "rounded-full", "border-2", "transition", "duration-200",
//             item.color === "orange" ? "border-orange-500 bg-orange-100 text-orange-600" : "",
//             item.color === "gray" ? "border-gray-400 bg-gray-100 text-gray-700" : "",
//             item.color === "black" ? "border-black bg-black text-white" : "",
//             item.color === "red" ? "border-red-500 bg-red-100 text-red-600" : ""
//           ],
//           title: item.title,
//         },
//           createElement("i", { class: [item.icon, "text-md"] }))
//       )
//     )
//   ]);
// }

// // Fonction pour mettre à jour la navbar avec les infos du groupe
// function updateNavBarGroupe(groupe) {
//   currentNavGroupe = groupe;
//   const messagesArea = document.getElementById("messages-area");
//   if (messagesArea && messagesArea.parentElement) {
//     const rightColumn = messagesArea.parentElement;
//     const newNavBar = createNavBarGroupe(groupe);
    
//     // Remplacer l'ancienne navbar par la nouvelle
//     const oldNavBar = rightColumn.firstElementChild;
//     if (oldNavBar) {
//       rightColumn.replaceChild(newNavBar, oldNavBar);
//     }
//   }
// }

// // Fonction pour afficher la zone de conversation du groupe dans la colonne de droite
// function showGroupeConversationArea(groupe) {
//   selectedGroupe = groupe;
//   const groupeKey = `groupe_${groupe.id}`;
  
//   // Mettre à jour la navbar avec les infos du groupe
//   updateNavBarGroupe(groupe);
  
//   // Initialiser la conversation du groupe si elle n'existe pas
//   if (!conversationsGroupes[groupeKey]) {
//     conversationsGroupes[groupeKey] = [];
//   }
  
//   const messagesArea = document.getElementById("messages-area");
//   if (!messagesArea) return;
  
//   // Container pour les messages du groupe
//   const messagesContainer = createElement("div", {
//     id: "messages-container-groupe",
//     class: ["flex-1", "space-y-3", "overflow-y-auto", "max-h-96"]
//   });
  
//   messagesArea.replaceChildren(messagesContainer);
//   renderGroupeMessages(groupe);
  
//   // Activer le champ de saisie pour le groupe
//   if (currentSmsInput) {
//     currentSmsInput.disabled = false;
//     currentSmsInput.placeholder = `Envoyer un message au groupe ${groupe.nom}...`;
    
//     // Modifier l'événement onkeypress pour les groupes
//     currentSmsInput.onkeypress = (e) => {
//       if (e.key === 'Enter' && e.target.value.trim() && selectedGroupe) {
//         sendGroupeMessage(selectedGroupe, e.target.value.trim());
//         e.target.value = '';
//       }
//     };
//   }
  
//   // Modifier l'événement onclick de l'icône d'envoi pour les groupes
//   const sendIcon = document.querySelector('.fa-circle-right');
//   if (sendIcon) {
//     sendIcon.onclick = () => {
//       if (currentSmsInput.value.trim() && selectedGroupe) {
//         sendGroupeMessage(selectedGroupe, currentSmsInput.value.trim());
//         currentSmsInput.value = '';
//       }
//     };
//   }
// }

// // Fonction pour envoyer un message au groupe
// function sendGroupeMessage(groupe, message) {
//   const groupeKey = `groupe_${groupe.id}`;
//   const timestamp = new Date().toLocaleTimeString('fr-FR', { 
//     hour: '2-digit', 
//     minute: '2-digit' 
//   });
  
//   const newMessage = {
//     id: Date.now(),
//     text: message,
//     time: timestamp,
//     sender: 'me', // ou l'utilisateur actuel
//     type: 'text'
//   };
  
//   // Ajouter le message à la conversation du groupe
//   if (!conversationsGroupes[groupeKey]) {
//     conversationsGroupes[groupeKey] = [];
//   }
//   conversationsGroupes[groupeKey].push(newMessage);
  
//   // Re-rendre les messages
//   renderGroupeMessages(groupe);
// }

// // Fonction pour afficher les messages du groupe
// function renderGroupeMessages(groupe) {
//   const groupeKey = `groupe_${groupe.id}`;
//   const messages = conversationsGroupes[groupeKey] || [];
//   const container = document.getElementById("messages-container-groupe");
  
//   if (!container) return;
  
//   if (messages.length === 0) {
//     container.innerHTML = `
//       <div class="text-center text-gray-500 mt-8">
//         <i class="fa-solid fa-users text-4xl mb-2"></i>
//         <p>Aucun message dans ce groupe</p>
//         <p class="text-sm">Commencez la conversation !</p>
//       </div>
//     `;
//     return;
//   }
  
//   container.replaceChildren(
//     ...messages.map(msg => createGroupeMessageElement(msg))
//   );
  
//   // Scroll vers le bas
//   container.scrollTop = container.scrollHeight;
// }

// // Fonction pour créer un élément de message pour le groupe
// function createGroupeMessageElement(message) {
//   const isMe = message.sender === 'me';
  
//   return createElement("div", {
//     class: [
//       "flex", 
//       isMe ? "justify-end" : "justify-start"
//     ]
//   }, [
//     createElement("div", {
//       class: [
//         "max-w-xs", "lg:max-w-md", "px-4", "py-2", "rounded-lg", "shadow",
//         isMe ? "bg-blue-500 text-white" : "bg-white text-gray-800",
//         "break-words"
//       ]
//     }, [
//       createElement("p", { class: ["text-sm"] }, message.text),
//       createElement("p", { 
//         class: ["text-xs", "mt-1", isMe ? "text-blue-100" : "text-gray-500"] 
//       }, message.time)
//     ])
//   ]);
// }

// // Modification à apporter dans showGroupeDetails (remplacer la fonction existante)
// function showGroupeDetails(groupe) {
//   selectedGroupe = groupe;
  
//   // Afficher la conversation du groupe dans la colonne de droite
//   showGroupeConversationArea(groupe);
  
//   const backBtn = createElement("button", {
//     class: ["flex", "items-center", "gap-2", "text-blue-600", "hover:underline", "mb-4"],
//     onclick: () => showGroupes()
//   }, [
//     createElement("i", { class: ["fa-solid", "fa-arrow-left"] }),
//     "Retour aux groupes"
//   ]);

//   const header = createElement("div", {
//     class: ["bg-white", "p-4", "rounded", "shadow", "mb-4"]
//   }, [
//     createElement("h2", { class: ["text-2xl", "font-bold", "text-gray-800"] }, groupe.nom),
//     createElement("p", { class: ["text-gray-600", "mt-2"] }, groupe.description || "Aucune description"),
//     createElement("div", { class: ["text-sm", "text-gray-500", "mt-2"] }, `Admin(s): ${groupe.adminTel || "-"}`)
//   ]);

//   // Actions du groupe (si admin)
//   const actions = isAdmin ? createElement("div", {
//     class: ["flex", "gap-2", "mb-4"]
//   }, [
//     createElement("button", {
//       class: ["bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700"],
//       onclick: () => showEditGroupeForm(groupe)
//     }, "Modifier"),
//     createElement("button", {
//       class: ["bg-green-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-green-700"],
//       onclick: () => showAddMemberForm(groupe)
//     }, "Ajouter membre"),
//     createElement("button", {
//       class: ["bg-red-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-red-700"],
//       onclick: () => {
//         if (confirm(`Êtes-vous sûr de vouloir supprimer le groupe "${groupe.nom}" ?`)) {
//           const index = groupes.findIndex(g => g.id === groupe.id);
//           if (index !== -1) {
//             groupes.splice(index, 1);
//             showGroupes();
//           }
//         }
//       }
//     }, "Supprimer")
//   ]) : null;

//   // Liste des membres (limitée à 10)
//   const membresAffiches = groupe.membres ? groupe.membres.slice(0, 10) : [];
//   const membresRestants = groupe.membres ? Math.max(0, groupe.membres.length - 10) : 0;

//   const membersContainer = createElement("div", {
//     class: ["bg-white", "p-4", "rounded", "shadow"]
//   }, [
//     createElement("h3", { class: ["text-lg", "font-semibold", "mb-3"] }, `Membres (${groupe.membres ? groupe.membres.length : 0})`),
//     createElement("div", { class: ["space-y-2"] }, 
//       membresAffiches.map(memberContact => {
//         const member = Liste.find(c => c.contact === memberContact) || { prenom: "Inconnu", name: "", contact: memberContact };
//         return createElement("div", {
//           class: ["flex", "items-center", "justify-between", "p-2", "bg-gray-50", "rounded"]
//         }, [
//           createElement("div", { class: ["flex", "items-center", "gap-3"] }, [
//             member.photo ? 
//               createElement("img", {
//                 class: ["w-8", "h-8", "rounded-full", "object-cover"],
//                 src: member.photo,
//                 alt: member.name || member.prenom
//               }) :
//               createElement("div", {
//                 class: ["w-8", "h-8", "bg-yellow-400", "rounded-full", "flex", "items-center", "justify-center", "text-black", "font-bold", "text-xs"]
//               }, `${(member.prenom?.charAt(0) || '').toUpperCase()}${(member.name?.charAt(0) || '').toUpperCase()}`),
//             createElement("div", {}, [
//               createElement("div", { class: ["font-medium"] }, `${member.prenom} ${member.name}`),
//               createElement("div", { class: ["text-sm", "text-gray-500"] }, member.contact)
//             ])
//           ]),
//           isAdmin && groupe.admins && !groupe.admins.includes(memberContact) ? 
//             createElement("button", {
//               class: ["text-red-600", "hover:text-red-800", "text-sm"],
//               onclick: () => {
//                 if (confirm(`Retirer ${member.prenom} ${member.name} du groupe ?`)) {
//                   groupe.membres = groupe.membres.filter(m => m !== memberContact);
//                   showGroupeDetails(groupe);
//                 }
//               }
//             }, "Retirer") : 
//             createElement("span", { class: ["text-xs", "text-blue-600"] }, groupe.admins && groupe.admins.includes(memberContact) ? "Admin" : "")
//         ]);
//       })
//     ),
//     // Afficher le nombre de membres restants si > 10
//     membresRestants > 0 ? createElement("div", {
//       class: ["text-center", "mt-3", "text-gray-500", "text-sm", "italic"]
//     }, `+${membresRestants} autre(s) membre(s)`) : null
//   ].filter(Boolean));

//   const container = createElement("div", {
//     class: ["p-4", "space-y-4"]
//   }, [backBtn, header, actions, membersContainer].filter(Boolean));

//   centerColumn.replaceChildren(container);
// }
// //////////////////********************* */
// function archiverGroupe(id) {
//   const index = groupes.findIndex(g => g.id === id);
//   if (index !== -1) {
//     const groupe = groupes.splice(index, 1)[0];
//     groupesArchives.push(groupe);
//     if (showingArchives) {
//       showArchives();
//     } else {
//       showGroupes();
//     }
//   }
// }

// function showArchives() {
//   currentView = 'archives';
//   let filtre = "";

//   const inputSearch = createElement("input", {
//     type: "text",
//     placeholder: "Rechercher dans les archives...",
//     class: [
//       "w-full", "px-4", "py-2", "rounded", "border",
//       "border-gray-300", "focus:outline-none",
//       "focus:ring-2", "focus:ring-blue-500", "mb-4"
//     ],
//     oninput: (e) => {
//       filtre = e.target.value.toLowerCase();
//       updateArchiveList();
//     }
//   });

//   const archiveContainer = createElement("div", {
//     class: ["space-y-4"]
//   });

//   function updateArchiveList() {
//     if (groupesArchives.length === 0) {
//       archiveContainer.replaceChildren(
//         createElement("div", { class: ["text-center", "text-gray-500", "italic"] }, "Aucun groupe archivé.")
//       );
//       return;
//     }

//     archiveContainer.replaceChildren(
//       ...groupesArchives
//         .filter(g => g.nom.toLowerCase().includes(filtre))
//         .map(groupe => {
//           const container = createElement("div", {
//             class: ["relative", "overflow-hidden", "rounded", "bg-gray-100", "shadow", "transition-all", "duration-300"]
//           });

//           const content = createElement("div", {
//             class: ["p-3", "transition-transform", "duration-300", "group-content"]
//           }, [
//             createElement("div", { class: ["font-bold", "text-gray-700"] }, groupe.nom),
//             createElement("div", { class: ["text-sm", "text-gray-500"] }, groupe.description || ""),
//             createElement("div", { class: ["text-xs", "text-gray-400", "mt-1"] }, `Admin: ${groupe.adminTel || "-"}`)
//           ]);

//           const actionBtns = createElement("div", {
//             class: ["absolute", "top-0", "left-0", "h-full", "flex", "items-center", "gap-2", "bg-green-500", "px-3", "text-sm", "group-actions", "hidden"]
//           }, [
//             createElement("button", {
//               class: ["text-white", "hover:underline", "flex", "items-center", "gap-1"],
//               onclick: () => {
//                 const index = groupesArchives.findIndex(g => g.id === groupe.id);
//                 if (index !== -1) {
//                   const groupeDearchive = groupesArchives.splice(index, 1)[0];
//                   groupes.push(groupeDearchive);

//                   if (groupesArchives.length === 0) {
//                     showingArchives = false;
//                     showArchives();
//                   } else {
//                     updateArchiveList();
//                   }
//                 }
//               }
//             }, [
//               createElement("i", { class: ["fa-solid", "fa-box-open"] }),
//             ])
//           ]);

//           let timer;
//           content.addEventListener("mousedown", () => timer = setTimeout(() => {
//             content.style.transform = "translateX(110px)";
//             actionBtns.classList.remove("hidden");
//           }, 600));

//           content.addEventListener("mouseup", () => clearTimeout(timer));
//           content.addEventListener("mouseleave", () => clearTimeout(timer));
//           content.addEventListener("touchstart", () => timer = setTimeout(() => {
//             content.style.transform = "translateX(110px)";
//             actionBtns.classList.remove("hidden");
//           }, 600));
//           content.addEventListener("touchend", () => clearTimeout(timer));

//           container.addEventListener("click", () => {
//             content.style.transform = "translateX(0)";
//             actionBtns.classList.add("hidden");
//           });

//           container.append(content);
//           container.append(actionBtns);

//           return container;
//         })
//     );
//   }

//   centerColumn.replaceChildren(
//     createElement("div", { class: ["p-4", "h-full", "overflow-y-auto", "space-y-4"] }, [
//       createElement("h2", { class: ["text-xl", "font-semibold"] }, "Groupes archivés"),
//       inputSearch,
//       archiveContainer
//     ])
//   );

//   updateArchiveList();
// }

// ///**** dif*******************************/

// function showDiffusion() {
//   currentView = 'diffusion';
//   let filtre = "";

//   if (Liste.length === 0) {
//     centerColumn.replaceChildren(createElement("div", {
//       class: ["text-center", "text-black", "p-4"]
//     }, "Aucun contact pour le moment."));
//     return;
//   }

//   // Titre de la page
//   const titre = createElement("h2", {
//     class: ["text-xl", "font-semibold", "mb-4", "text-gray-800"]
//   }, "Diffusion de message");

//   // Champ de recherche
//   const inputSearch = createElement("input", {
//     type: "text",
//     placeholder: "Rechercher un contact...",
//     class: [
//       "w-full", "px-4", "py-2", "rounded-lg", "border",
//       "border-gray-300", "focus:outline-none",
//       "focus:ring-2", "focus:ring-blue-500", "mb-4"
//     ],
//     oninput: (e) => {
//       filtre = e.target.value.toLowerCase();
//       updateContactList();
//     }
//   });

//   // Liste des contacts (scrollable)
//   const listContainer = createElement("div", {
//     class: [
//       "space-y-2", "overflow-y-auto", "max-h-[400px]", "pr-2"
//     ]
//   });

//   // Mise à jour dynamique selon la recherche
//   function updateContactList() {
//     listContainer.innerHTML = "";

//     Liste
//       .filter(contact =>
//         (contact.name && contact.name.toLowerCase().includes(filtre)) ||
//         (contact.prenom && contact.prenom.toLowerCase().includes(filtre))
//       )
//       .forEach((contact, index) => {
//         const checkbox = createElement("input", {
//           type: "checkbox",
//           id: `chk-${index}`,
//           value: index,
//           class: ["form-checkbox", "h-5", "w-5", "text-blue-600"]
//         });

//         const avatar = contact.photo
//           ? createElement("img", {
//               class: ["w-10", "h-10", "rounded-full", "object-cover"],
//               src: contact.photo,
//               alt: `${contact.prenom} ${contact.name}`
//             })
//           : createElement("div", {
//               class: [
//                 "w-10", "h-10", "bg-yellow-400", "rounded-full", "flex",
//                 "items-center", "justify-center", "text-black", "font-bold", "text-sm"
//               ]
//             }, `${(contact.prenom?.charAt(0) || '').toUpperCase()}${(contact.name?.charAt(0) || '').toUpperCase()}`);

//         const label = createElement("label", {
//           for: `chk-${index}`,
//           class: [
//             "flex", "items-center", "gap-3", "p-2", "rounded-lg",
//             "hover:bg-gray-100", "transition", "cursor-pointer"
//           ]
//         }, [
//           checkbox,
//           avatar,
//           createElement("span", {
//             class: ["text-gray-800", "font-medium"]
//           }, `${contact.prenom} ${contact.name}`)
//         ]);

//         listContainer.appendChild(label);
//       });
//   }

//   // Boutons
//   const btnSend = createElement("button", {
//     class: ["bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", "transition"],
//     onclick: () => {
//       const checkedIndexes = Array.from(listContainer.querySelectorAll('input[type="checkbox"]:checked'))
//         .map(cb => parseInt(cb.value));
//       if (checkedIndexes.length === 0) {
//         alert("Veuillez sélectionner au moins un contact.");
//         return;
//       }
//       alert(`Contacts sélectionnés : ${checkedIndexes.map(i => `${Liste[i].prenom} ${Liste[i].name}`).join(", ")}`);
//     }
//   }, "Envoyer");

//   const btnCancel = createElement("button", {
//     class: ["bg-gray-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-gray-600", "transition"],
//     onclick: showDiscussion
//   }, "Annuler");

//   const btnContainer = createElement("div", {
//     class: ["flex", "gap-2", "mt-4"]
//   }, [btnSend, btnCancel]);

//   const wrapper = createElement("div", {
//     class: ["p-4", "bg-white", "rounded-lg", "shadow-md", "h-full", "flex", "flex-col"]
//   }, [
//     titre,
//     inputSearch,
//     listContainer,
//     btnContainer
//   ]);

//   centerColumn.replaceChildren(wrapper);
//   updateContactList();
// }

// /////**************************** */
// const centerColumn = createElement("div", { class: ["bg-[#f9f7f5]", "w-[400px]"], });
// let filtre = "";

// let conversations = {}; // Stocker les conversations par contact
// // Variables pour les éléments de l'interface principale
// let rightColumn = null;
// let currentSmsInput = null;

// // Variable pour stocker le contact actuellement sélectionné pour la navbar
// let currentNavContact = null;

// // Données pour la barre de navigation (vous devez définir cette variable)

// const recherche = createElement("input", {
//   type: "text",
//   placeholder: "Rechercher...",
//   class: [
//     "w-full", "px-4", "py-2", "rounded", "border",
//     "border-gray-300", "focus:outline-none",
//     "focus:ring-2", "focus:ring-blue-500", "mb-4"
//   ],
//   oninput: (e) => {
//     filtre = e.target.value.toLowerCase();
//     showDiscussion();
//   }
// });

// // Fonction pour créer la barre de navigation avec profil
// function createNavBar(contact = null) {
//   // Déterminer les informations à afficher
//   let profileContent, contactInfo;
  
//   if (contact) {
//     // Récupérer les deux premières lettres (prénom + nom)
//     const firstLetter = (contact.prenom?.charAt(0) || '').toUpperCase();
//     const secondLetter = (contact.name?.charAt(0) || '').toUpperCase();
//     profileContent = firstLetter + secondLetter;
    
//     // Informations du contact
//     contactInfo = createElement("div", {
//       class: ["flex", "flex-col", "items-center", "text-center"]
//     }, [
//       createElement("div", {
//         class: ["font-semibold", "text-gray-800", "text-sm"]
//       }, `${contact.prenom} ${contact.name}`),
//       createElement("div", {
//         class: ["text-xs", "text-gray-600"]
//       }, contact.contact)
//     ]);
//   } else {
//     // Profil par défaut
//     profileContent = "";
//     contactInfo = null;
//   }

//   return createElement("div", {
//     class: [
//       "w-full", "h-[60px]", "border-b", "border-b-rose-50",
//       "bg-[#efe7d9]", "flex", "items-center", "justify-between", "px-4"
//     ]
//   }, [
//     // Section gauche avec profil et infos contact
//     createElement("div", {
//       class: ["flex", "items-center", "gap-3"]
//     }, [
//       // Profil à gauche
//       createElement("div", {
//         class: [
//           "w-10", "h-10", "bg-[#757574]", "rounded-full", "cursor-pointer",
//           "flex", "items-center", "justify-center", "text-white", "font-bold", "text-sm"
//         ]
//       }, profileContent),
//       // Informations du contact (nom + numéro)
//       contactInfo
//     ].filter(Boolean)),
    
//     // Boutons de navigation à droite
//     createElement("div", {
//       class: ["flex", "flex-row", "gap-3", "items-center"]
//     },
//       haut.map(item =>
//         createElement("button", {
//           class: [
//             "w-[40px]", "h-[40px]", "flex", "items-center", "justify-center",
//             "rounded-full", "border-2", "transition", "duration-200",
//             item.color === "orange" ? "border-orange-500 bg-orange-100 text-orange-600" : "",
//             item.color === "gray" ? "border-gray-400 bg-gray-100 text-gray-700" : "",
//             item.color === "black" ? "border-black bg-black text-white" : "",
//             item.color === "red" ? "border-red-500 bg-red-100 text-red-600" : ""
//           ],
//           title: item.title,
//         },
//           createElement("i", { class: [item.icon, "text-md"] }))
//       )
//     )
//   ]);
// }

// // Fonction pour mettre à jour la navbar avec les infos du contact
// function updateNavBar(contact) {
//   currentNavContact = contact;
//   const messagesArea = document.getElementById("messages-area");
//   if (messagesArea && messagesArea.parentElement) {
//     const rightColumn = messagesArea.parentElement;
//     const newNavBar = createNavBar(contact);
    
//     // Remplacer l'ancienne navbar par la nouvelle
//     const oldNavBar = rightColumn.firstElementChild;
//     if (oldNavBar) {
//       rightColumn.replaceChild(newNavBar, oldNavBar);
//     }
//   }
// }

// // Fonction pour créer la colonne de droite avec NavBar et SMS
// function createRightColumn() {
//   const navBar = createNavBar();
  
//   const smsInput = createElement("input", {
//     class: [
//       "flex-1", "border", "border-gray-300", "rounded-full",
//       "focus:outline-none", "text-sm", "px-4", "py-3"
//     ],
//     placeholder: "Tapez votre message...",
//     onkeypress: (e) => {
//       if (e.key === 'Enter' && e.target.value.trim() && selectedContact) {
//         sendMessage(selectedContact, e.target.value.trim());
//         e.target.value = '';
//       }
//     }
//   });
//   currentSmsInput = smsInput;
  
//   // Créer le menu des options
//   const attachmentMenu = createElement("div", {
//     id: "attachment-menu",
//     class: [
//       "absolute", "bottom-16", "left-3", "bg-white", "border", "border-gray-200",
//       "rounded-lg", "shadow-lg", "p-2", "space-y-2", "hidden", "z-10", "min-w-48"
//     ]
//   }, [
//     createElement("div", {
//       class: [
//         "flex", "items-center", "gap-3", "px-3", "py-2", "hover:bg-gray-100",
//         "rounded", "cursor-pointer", "transition-colors"
//       ],
//       onclick: () => handlePhotoSelection()
//     }, [
//       createElement("i", { class: ["fa-solid", "fa-camera", "text-blue-500"] }),
//       createElement("span", { class: ["text-sm", "text-gray-700"] }, "Photo")
//     ]),
//     createElement("div", {
//       class: [
//         "flex", "items-center", "gap-3", "px-3", "py-2", "hover:bg-gray-100",
//         "rounded", "cursor-pointer", "transition-colors"
//       ],
//       onclick: () => handleDocumentSelection()
//     }, [
//       createElement("i", { class: ["fa-solid", "fa-file", "text-green-500"] }),
//       createElement("span", { class: ["text-sm", "text-gray-700"] }, "Document")
//     ]),
//     createElement("div", {
//       class: [
//         "flex", "items-center", "gap-3", "px-3", "py-2", "hover:bg-gray-100",
//         "rounded", "cursor-pointer", "transition-colors"
//       ],
//       onclick: () => handleContactSelection()
//     }, [
//       createElement("i", { class: ["fa-solid", "fa-user", "text-purple-500"] }),
//       createElement("span", { class: ["text-sm", "text-gray-700"] }, "Contact")
//     ])
//   ]);
  
//   const sms = createElement("div", {
//     class: [
//       "bg-white", "text-black", "border-t", "p-3", "flex", "relative",
//       "mb-0", "mt-auto"
//     ]
//   }, [
//     // Bouton + pour les pièces jointes
//     createElement("button", {
//       id: "attachment-btn",
//       class: [
//         "w-10", "h-10", "bg-gray-100", "hover:bg-gray-200", "rounded-full",
//         "flex", "items-center", "justify-center", "mr-3", "transition-colors",
//         "border", "border-gray-300"
//       ],
//       onclick: () => toggleAttachmentMenu()
//     }, [
//       createElement("i", { class: ["fa-solid", "fa-plus", "text-gray-600"] })
//     ]),
//     smsInput,
//     createElement("i", {
//       class: [
//         "fa-solid", "fa-circle-right",
//         "text-4xl", // taille de l'icône (plus grand que text-lg)
//         "text-black",
//         "w-12", "h-12", // largeur et hauteur du conteneur
//         "flex", "items-center", "justify-center", // centrage de l'icône dans le carré
//         "rounded-full", // bordures arrondies si nécessaire
//         "cursor-pointer", "ml-3"
//       ],
//       onclick: () => {
//         if (smsInput.value.trim() && selectedContact) {
//           sendMessage(selectedContact, smsInput.value.trim());
//           smsInput.value = '';
//         }
//       }
//     }),
//     attachmentMenu
//   ]);
  
//   // Zone de messages (initialement vide)
//   const messagesArea = createElement("div", {
//     id: "messages-area",
//     class: ["flex-1", "overflow-y-auto", "p-4", "bg-[#efe7d9]"]
//   });
  
//   return createElement("div", {
//     class: ["bg-[#efe7d9]", "w-[650px]", "rounded-r-lg", "flex", "flex-col", "h-[700px]"]
//   }, [
//     navBar,
//     messagesArea,
//     sms
//   ]);
// }

// // Fonction pour afficher la zone de conversation dans la colonne de droite
// function showConversationArea(contact) {
//   selectedContact = contact;
//   const contactKey = `${contact.prenom}_${contact.name}_${contact.contact}`;
  
//   // Mettre à jour la navbar avec les infos du contact
//   updateNavBar(contact);
  
//   // Initialiser la conversation si elle n'existe pas
//   if (!conversations[contactKey]) {
//     conversations[contactKey] = [];
//   }
  
//   const messagesArea = document.getElementById("messages-area");
//   if (!messagesArea) return;
  
//   // Container pour les messages
//   const messagesContainer = createElement("div", {
//     id: "messages-container",
//     class: ["flex-1", "space-y-3", "overflow-y-auto", "max-h-96"]
//   });
  
//   messagesArea.replaceChildren(messagesContainer);
//   renderMessages(contact);
  
//   // Activer le champ de saisie
//   if (currentSmsInput) {
//     currentSmsInput.disabled = false;
//     currentSmsInput.placeholder = `Envoyer un message à ${contact.prenom}...`;
//   }
// }

// // Fonction pour basculer l'affichage du menu des pièces jointes
// function toggleAttachmentMenu() {
//   const menu = document.getElementById("attachment-menu");
//   if (menu) {
//     menu.classList.toggle("hidden");
//   }
// }

// // Fonction pour gérer la sélection de photos
// function handlePhotoSelection() {
//   if (!selectedContact) {
//     alert("Veuillez sélectionner un contact d'abord");
//     return;
//   }
  
//   const input = createElement("input", {
//     type: "file",
//     accept: "image/*",
//     style: "display: none",
//     onchange: (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         const message = `📷 Photo envoyée: ${file.name}`;
//         sendMessage(selectedContact, message);
//       }
//     }
//   });
  
//   document.body.appendChild(input);
//   input.click();
//   document.body.removeChild(input);
  
//   // Fermer le menu
//   toggleAttachmentMenu();
// }

// // Fonction pour gérer la sélection de documents
// function handleDocumentSelection() {
//   if (!selectedContact) {
//     alert("Veuillez sélectionner un contact d'abord");
//     return;
//   }
  
//   const input = createElement("input", {
//     type: "file",
//     accept: ".pdf,.doc,.docx,.txt,.xlsx,.xls,.ppt,.pptx",
//     style: "display: none",
//     onchange: (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         const message = `📄 Document envoyé: ${file.name}`;
//         sendMessage(selectedContact, message);
//       }
//     }
//   });
  
//   document.body.appendChild(input);
//   input.click();
//   document.body.removeChild(input);
  
//   // Fermer le menu
//   toggleAttachmentMenu();
// }

// // Fonction pour créer et afficher la liste de contacts
// function showContactSelectionModal() {
//   // Supprimer le modal existant s'il y en a un
//   const existingModal = document.getElementById('contact-selection-modal');
//   if (existingModal) {
//     existingModal.remove();
//   }

//   // Créer le modal
//   const modal = document.createElement('div');
//   modal.id = 'contact-selection-modal';
//   modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

//   const modalContent = document.createElement('div');
//   modalContent.className = 'bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-96 overflow-hidden flex flex-col shadow-xl';

//   // Titre
//   const title = document.createElement('h3');
//   title.className = 'text-lg font-semibold mb-4 text-gray-800';
//   title.textContent = 'Sélectionner un contact à partager';

//   // Container pour la liste avec scroll
//   const listContainer = document.createElement('div');
//   listContainer.className = 'flex-1 overflow-y-auto mb-4';

//   // Liste des contacts
//   const contactList = document.createElement('div');
//   contactList.className = 'space-y-2';

//   // Filtrer les contacts (exclure le contact actuel)
//   const availableContacts = Liste.filter(contact => 
//     contact.contact !== selectedContact.contact
//   );

//   if (availableContacts.length === 0) {
//     const noContacts = document.createElement('p');
//     noContacts.className = 'text-gray-500 text-center py-8';
//     noContacts.textContent = 'Aucun autre contact disponible';
//     contactList.appendChild(noContacts);
//   } else {
//     // Créer les éléments de contact
//     availableContacts.forEach(contact => {
//       const contactItem = document.createElement('div');
//       contactItem.className = 'p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors flex items-center space-x-3';

//       // Avatar
//       const avatar = document.createElement('div');
//       avatar.className = 'w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold';
//       avatar.textContent = contact.prenom.charAt(0).toUpperCase();

//       // Infos contact
//       const contactInfo = document.createElement('div');
//       contactInfo.className = 'flex-1';
      
//       const contactName = document.createElement('div');
//       contactName.className = 'font-medium text-gray-900';
//       contactName.textContent = `${contact.prenom} ${contact.name}`;
      
//       const contactNumber = document.createElement('div');
//       contactNumber.className = 'text-sm text-gray-500';
//       contactNumber.textContent = contact.contact;

//       contactInfo.appendChild(contactName);
//       contactInfo.appendChild(contactNumber);

//       contactItem.appendChild(avatar);
//       contactItem.appendChild(contactInfo);

//       // Événement de clic pour sélectionner le contact
//       contactItem.addEventListener('click', () => {
//         const message = `👤 Contact partagé: ${contact.prenom} ${contact.name} - ${contact.contact}`;
//         sendMessage(selectedContact, message);
//         closeContactModal();
//       });

//       contactList.appendChild(contactItem);
//     });
//   }

//   listContainer.appendChild(contactList);

//   // Bouton fermer
//   const closeButton = document.createElement('button');
//   closeButton.className = 'w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors';
//   closeButton.textContent = 'Fermer';
//   closeButton.addEventListener('click', closeContactModal);

//   // Assembler le modal
//   modalContent.appendChild(title);
//   modalContent.appendChild(listContainer);
//   modalContent.appendChild(closeButton);
//   modal.appendChild(modalContent);

//   // Fermer en cliquant sur l'arrière-plan
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       closeContactModal();
//     }
//   });

//   document.body.appendChild(modal);
// }

// // Fonction pour fermer le modal
// function closeContactModal() {
//   const modal = document.getElementById('contact-selection-modal');
//   if (modal) {
//     modal.remove();
//   }
// }

// // Fonction pour afficher une notification Tailwind
// function showNotification(message, type = 'info') {
//   const existingNotification = document.getElementById('notification');
//   if (existingNotification) {
//     existingNotification.remove();
//   }

//   const notification = document.createElement('div');
//   notification.id = 'notification';
  
//   const baseClasses = 'fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
//   const typeClasses = {
//     info: 'bg-blue-500 text-white',
//     warning: 'bg-yellow-500 text-white',
//     error: 'bg-red-500 text-white',
//     success: 'bg-green-500 text-white'
//   };

//   notification.className = `${baseClasses} ${typeClasses[type] || typeClasses.info}`;
//   notification.textContent = message;

//   document.body.appendChild(notification);

//   // Animation d'entrée
//   setTimeout(() => {
//     notification.classList.remove('translate-x-full');
//   }, 100);

//   // Disparition automatique
//   setTimeout(() => {
//     notification.classList.add('translate-x-full');
//     setTimeout(() => {
//       if (notification.parentNode) {
//         notification.remove();
//       }
//     }, 300);
//   }, 3000);
// }

// // Fonction principale améliorée (suit votre logique)
// function handleContactSelection() {
//   if (!selectedContact) {
//     showNotification("Veuillez sélectionner un contact d'abord", "warning");
//     return;
//   }
  
//   if (Liste.length === 0) {
//     showNotification("Aucun contact disponible", "info");
//     return;
//   }
  
//   // Afficher le modal au lieu du prompt
//   showContactSelectionModal();
  
//   // Fermer le menu d'attachement
//   toggleAttachmentMenu();
// }

// // Améliorer le style de l'icône + pour qu'elle ait les mêmes propriétés que l'icône envoyer
// function styleAttachmentButton() {
//   const attachmentBtn = document.getElementById("attachment-btn");
//   if (attachmentBtn) {
//     // Appliquer les mêmes classes Tailwind que le bouton envoyer
//     attachmentBtn.className = 'w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed';
//   }
// }

// // Fermer le menu si on clique ailleurs (votre logique existante améliorée)
// document.addEventListener('click', (e) => {
//   const menu = document.getElementById("attachment-menu");
//   const btn = document.getElementById("attachment-btn");
  
//   if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
//     menu.classList.add("hidden");
//   }
// });

// // Gestion de la touche Échap pour fermer le modal
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeContactModal();
//   }
// });

// // Appliquer le style au bouton d'attachement au chargement
// document.addEventListener('DOMContentLoaded', styleAttachmentButton);

// // Fonction pour envoyer un message
// function sendMessage(contact, message) {
//   const contactKey = `${contact.prenom}_${contact.name}_${contact.contact}`;
//   const timestamp = new Date();
  
//   const newMessage = {
//     text: message,
//     timestamp: timestamp,
//     sender: 'me'
//   };
  
//   conversations[contactKey].push(newMessage);
//   renderMessages(contact);
  
//   // Mettre à jour la liste des contacts pour afficher le dernier message
//   showDiscussion();
  
//   // Simuler une réponse automatique après 2 secondes
//   setTimeout(() => {
//     const autoReply = {
//       text: "Message reçu ! (réponse automatique)",
//       timestamp: new Date(),
//       sender: 'contact'
//     };
//     conversations[contactKey].push(autoReply);
//     if (selectedContact && selectedContact.contact === contact.contact) {
//       renderMessages(contact);
//       showDiscussion(); // Mettre à jour la liste
//     }
//   }, 2000);
// }

// // Fonction pour afficher les messages
// function renderMessages(contact) {
//   const contactKey = `${contact.prenom}_${contact.name}_${contact.contact}`;
//   const messagesContainer = document.getElementById("messages-container");
  
//   if (!messagesContainer) return;
  
//   const messages = conversations[contactKey] || [];
  
//   if (messages.length === 0) {
//     messagesContainer.replaceChildren(
//       createElement("div", {
//         class: ["flex", "justify-center", "items-center", "text-gray-500", "h-32"]
//       }, "Aucun message. Commencez la conversation !")
//     );
//     return;
//   }
  
//   const messageElements = messages.map(msg => {
//     const isMe = msg.sender === 'me';
//     return createElement("div", {
//       class: ["flex", isMe ? "justify-end" : "justify-start"]
//     }, [
//       createElement("div", {
//         class: [
//           "max-w-xs", "lg:max-w-md", "px-4", "py-2", "rounded-lg",
//           isMe ? "bg-blue-500" : "bg-gray-200",
//           isMe ? "text-white" : "text-gray-800",
//           "shadow-sm"
//         ]
//       }, [
//         createElement("div", {}, msg.text),
//         createElement("div", {
//           class: ["text-xs", "mt-1", "opacity-70"]
//         }, msg.timestamp.toLocaleTimeString('fr-FR', { 
//           hour: '2-digit', 
//           minute: '2-digit' 
//         }))
//       ])
//     ]);
//   });
  
//   messagesContainer.replaceChildren(...messageElements);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight;
// }

// function renderDiscussionList(filteredList = Liste) {
//   if (filteredList.length === 0) {
//     return createElement("div", {
//       class: ["flex", "justify-center", "items-center", "text-gray-500", "h-full"]
//     }, "Aucun contact pour le moment.");
//   }
  
//   // Trier par prénom + nom
//   const sortedList = [...filteredList].sort((a, b) => {
//     const fullA = `${a.prenom?.toLowerCase() || ''} ${a.name?.toLowerCase() || ''}`;
//     const fullB = `${b.prenom?.toLowerCase() || ''} ${b.name?.toLowerCase() || ''}`;
//     return fullA.localeCompare(fullB);
//   });
  
//   // Identifier les doublons de nom + prénom
//   const nameCount = {};
//   for (const contact of sortedList) {
//     const key = `${contact.prenom || ''} ${contact.name || ''}`.trim();
//     nameCount[key] = (nameCount[key] || 0) + 1;
//   }
  
//   return createElement("div", {
//     class: ["flex-1", "overflow-y-auto"]
//   },
//     sortedList.map((contact, index) => {
//       const key = `${contact.prenom || ''} ${contact.name || ''}`.trim();
//       const shouldShowIndex = nameCount[key] > 1;
//       const contactKey = `${contact.prenom}_${contact.name}_${contact.contact}`;
//       const hasMessages = conversations[contactKey] && conversations[contactKey].length > 0;
//       const lastMessage = hasMessages ? conversations[contactKey][conversations[contactKey].length - 1] : null;
      
//       return createElement("div", {
//         class: [
//           "px-4", "py-3", "border-b", "border-gray-200",
//           "hover:bg-white", "cursor-pointer", "transition-colors", "duration-200",
//           selectedContact && selectedContact.contact === contact.contact ? "bg-white" : ""
//         ],
//         onclick: () => {
//           showConversationArea(contact);
//           // Mettre à jour la sélection visuelle
//           showDiscussion();
//         }
//       }, [
//         createElement("div", { class: ["text-xs", "text-gray-400"] }, shouldShowIndex ? `Index : ${Liste.indexOf(contact)}` : ""),
//         createElement("div", { class: ["flex", "items-center", "gap-3"] }, [
//           contact.photo ?
//             createElement("img", {
//               class: [
//                 "w-10", "h-10", "rounded-full", "object-cover",
//                 "border-2", "border-white"
//               ],
//               src: contact.photo,
//               alt: contact.name || contact.prenom
//             }) :
//             createElement("div", {
//               class: [
//                 "w-10", "h-10", "bg-gradient-to-br", "from-yellow-400",
//                 "to-black-500", "rounded-full", "flex", "items-center",
//                 "justify-center", "text-black", "font-bold", "text-sm"
//               ]
//             }, `${(contact.prenom?.charAt(0) || '').toUpperCase()}${(contact.name?.charAt(0) || '').toUpperCase()}`),
//           createElement("div", { class: ["flex-1"] }, [
//             createElement("div", { class: ["font-medium", "text-gray-800", "text-sm"] }, `${contact.prenom || ''} ${contact.name || ''}`.trim()),
//             createElement("div", { class: ["text-gray-500", "text-xs", "mt-1"] }, [
//               createElement("div", {}, contact.contact),
//               lastMessage ? createElement("div", {
//                 class: ["text-gray-400", "text-xs", "mt-1", "truncate"]
//               }, `${lastMessage.sender === 'me' ? 'Vous: ' : ''}${lastMessage.text}`) : null
//             ].filter(Boolean))
//           ]),
//           hasMessages ? createElement("div", {
//             class: ["w-2", "h-2", "bg-blue-500", "rounded-full"]
//           }) : null
//         ].filter(Boolean))
//       ]);
//     })
//   );
// }

// function showDiscussion() {
//   const formWrapper = createElement("div", {
//     id: "form-add-contact"
//   });
  
//   const addContactBtn = createElement();
  
//   const container = createElement("div", {
//     class: ["p-4", "space-y-4","mb-4"]
//   }, [
//     createElement("div", {
//       class: ["flex", "items-center", "justify-between"]
//     }, [
//       createElement("h2", {
//         class: ["text-xl", "font-semibold", "text-gray-800"]
//       }, "Discussions"),
//       addContactBtn
//     ]),
//     recherche,
//     formWrapper
//   ]);
  
//   // Filtrer les contacts selon la recherche
//   const filteredContacts = filtre ? 
//     Liste.filter(contact => 
//       `${contact.prenom} ${contact.name} ${contact.contact}`.toLowerCase().includes(filtre)
//     ) : Liste;
  
//   const list = renderDiscussionList(filteredContacts);
//   centerColumn.replaceChildren(container, list);
  
//   // Si aucun contact n'est sélectionné, désactiver le champ SMS
//   if (!selectedContact && currentSmsInput) {
//     currentSmsInput.disabled = true;
//     currentSmsInput.placeholder = "Sélectionnez un contact pour envoyer un message...";
//   }
// }

// function addContactForm() {
//   function createInput(placeholder) {
//     const input = createElement("input", {
//       placeholder,
//       class: ["border", "rounded", "px-2", "py-2", "outline-none"]
//     });
//     const error = createElement("small", {
//       class: ["text-red-500", "hidden"]
//     });
//     const wrapper = createElement("div", { class: ["flex", "flex-col", "gap-1"] }, [input, error]);
//     return { input, error, wrapper };
//   }
  
//   const { input: inputPrenom, error: errorPrenom, wrapper: prenomField } = createInput("Prénom");
//   const { input: inputNom, error: errorNom, wrapper: nomField } = createInput("Nom");
//   const { input: inputContact, error: errorContact, wrapper: contactField } = createInput("Contact (chiffres uniquement)");
  
//   const addBtn = createElement("button", {
//     class: ["bg-black", "text-white", "px-4", "py-2", "rounded"],
//     onclick: () => {
//       let valid = true;
//       const prenom = inputPrenom.value.trim();
//       const nom = inputNom.value.trim();
//       const contact = inputContact.value.trim();
      
//       [inputPrenom, inputNom, inputContact].forEach(input => input.classList.remove("border-red-500"));
//       [errorPrenom, errorNom, errorContact].forEach(err => {
//         err.textContent = "";
//         err.classList.add("hidden");
//       });
      
//       if (!prenom) {
//         inputPrenom.classList.add("border-red-500");
//         errorPrenom.textContent = "Le prénom est requis.";
//         errorPrenom.classList.remove("hidden");
//         valid = false;
//       }
      
//       if (!nom) {
//         inputNom.classList.add("border-red-500");
//         errorNom.textContent = "Le nom est requis.";
//         errorNom.classList.remove("hidden");
//         valid = false;
//       }
      
//       if (!contact) {
//         inputContact.classList.add("border-red-500");
//         errorContact.textContent = "Le contact est requis.";
//         errorContact.classList.remove("hidden");
//         valid = false;
//       } else if (!/^\d+$/.test(contact)) {
//         inputContact.classList.add("border-red-500");
//         errorContact.textContent = "Le contact doit contenir uniquement des chiffres.";
//         errorContact.classList.remove("hidden");
//         valid = false;
//       } else if (Liste.some(c => c.contact === contact)) {
//         inputContact.classList.add("border-red-500");
//         errorContact.textContent = "Ce numéro est déjà enregistré.";
//         errorContact.classList.remove("hidden");
//         valid = false;
//       }
      
//       if (!valid) return;
      
//       function generateUniquePrenom(prenom, nom) {
//         let suffix = 1;
//         let uniquePrenom = prenom;
//         while (Liste.some(c => c.prenom === uniquePrenom && c.name === nom)) {
//           uniquePrenom = prenom + suffix;
//           suffix++;
//         }
//         return uniquePrenom;
//       }
      
//       const uniquePrenom = generateUniquePrenom(prenom, nom);
//       const newContact = {
//         prenom: uniquePrenom,
//         name: nom,
//         contact
//       };
      
//       Liste.push(newContact);
//       showDiscussion();
//     }
//   }, "Ajouter");
  
//   const cancelBtn = createElement("button", {
//     class: ["bg-gray-500", "text-white", "px-4", "py-2", "rounded"],
//     onclick: () => {
//       const wrapper = document.getElementById("form-add-contact");
//       if (wrapper) wrapper.innerHTML = "";
//     }
//   }, "Annuler");
  
//   const formContainer = createElement("div", {
//     class: ["p-4", "space-y-3", "flex", "flex-col", "bg-white", "rounded-lg", "shadow-md", "mb-4"]
//   }, [
//     createElement("h2", { class: ["text-xl", "font-semibold"] }, "Ajouter un contact"),
//     prenomField,
//     nomField,
//     contactField,
//     createElement("div", { class: ["flex", "gap-2"] }, [addBtn, cancelBtn])
//   ]);
  
//   const wrapper = document.getElementById("form-add-contact");
//   if (wrapper) wrapper.replaceChildren(formContainer);
// }

// // Initialisation de l'application avec la nouvelle structure
// const smsInput = createElement("input", {
//   class: [
//     "flex-1", "border", "border-gray-300", "rounded-full",
//     "focus:outline-none", "text-sm", "px-4", "py-3"
//   ],
//   placeholder: "Sélectionnez un contact pour envoyer un message...",
//   disabled: true,
//   onkeypress: (e) => {
//     if (e.key === 'Enter' && e.target.value.trim() && selectedContact) {
//       sendMessage(selectedContact, e.target.value.trim());
//       e.target.value = '';
//     }
//   }
// });
// currentSmsInput = smsInput;

// // Créer le menu des options pour l'initialisation
// const attachmentMenu = createElement("div", {
//   id: "attachment-menu-init",
//   class: [
//     "absolute", "bottom-16", "left-3", "bg-white", "border", "border-gray-200",
//     "rounded-lg", "shadow-lg", "p-2", "space-y-2", "hidden", "z-10", "min-w-48"
//   ]
// }, [
//   createElement("div", {
//     class: [
//       "flex", "items-center", "gap-3", "px-3", "py-2", "hover:bg-gray-100",
//       "rounded", "cursor-pointer", "transition-colors"
//     ],
//     onclick: () => handlePhotoSelection()
//   }, [
//     createElement("i", { class: ["fa-solid", "fa-camera", "text-blue-500"] }),
//     createElement("span", { class: ["text-sm", "text-gray-700"] }, "Photo")
//   ]),
//   createElement("div", {
//     class: [
//       "flex", "items-center", "gap-3", "px-3", "py-2", "hover:bg-gray-100",
//       "rounded", "cursor-pointer", "transition-colors"
//     ],
//     onclick: () => handleDocumentSelection()
//   }, [
//     createElement("i", { class: ["fa-solid", "fa-file", "text-green-500"] }),
//     createElement("span", { class: ["text-sm", "text-gray-700"] }, "Document")
//   ]),
//   createElement("div", {
//     class: [
//       "flex", "items-center", "gap-3", "px-3", "py-2", "hover:bg-gray-100",
//       "rounded", "cursor-pointer", "transition-colors"
//     ],
//     onclick: () => handleContactSelection()
//   }, [
//     createElement("i", { class: ["fa-solid", "fa-user", "text-purple-500"] }),
//     createElement("span", { class: ["text-sm", "text-gray-700"] }, "Contact")
//   ])
// ]);

// const sms = createElement("div", {
//   class: [
//     "bg-white", "text-black", "border-t", "p-3", "flex", "relative",
//     "mb-0", "mt-auto"
//   ]
// }, [
//   // Bouton + pour les pièces jointes
//   createElement("button", {
//     id: "attachment-btn-init",
//     class: [
//       "w-10", "h-10", "bg-gray-100", "hover:bg-gray-200", "rounded-full",
//       "flex", "items-center", "justify-center", "mr-3", "transition-colors",
//       "border", "border-gray-300"
//     ],
//     onclick: () => {
//       const menu = document.getElementById("attachment-menu-init");
//       if (menu) {
//         menu.classList.toggle("hidden");
//       }
//     }
//   }, [
//     createElement("i", { class: ["fa-solid", "fa-plus", "text-gray-600"] })
//   ]),
//   smsInput,
//   createElement("i", {
//     class: [
//       "fa-solid", "fa-circle-right",
//       "text-4xl",
//       "text-black",
//       "w-12", "h-12",
//       "flex", "items-center", "justify-center",
//       "rounded-full",
//       "cursor-pointer", "ml-3"
//     ],
//     onclick: () => {
//       if (smsInput.value.trim() && selectedContact) {
//         sendMessage(selectedContact, smsInput.value.trim());
//         smsInput.value = '';
//       }
//     }
//   }),
//   attachmentMenu
// ]);

// // Zone de messages par défaut
// const defaultMessagesArea = createElement("div", {
//   id: "messages-area",
//   class: ["flex-1", "overflow-y-auto", "p-4", "bg-[#efe7d9]", "flex", "items-center", "justify-center"]
// }, [
//   createElement("div", {
//     class: ["text-gray-500", "text-center"]
//   }, [
//     createElement("div", {
//       class: ["text-6xl", "mb-4"]
//     }, "💬"),
//     createElement("div", {
//       class: ["text-xl", "font-semibold", "mb-2"]
//     }, "Sélectionnez un contact"),
//     createElement("div", {}, "Choisissez une conversation pour commencer à envoyer des messages")
//   ])
// ]);

// // Créer la barre de navigation intégrée
// const navBar = createNavBar();

//   // Créer l'application principale avec votre structure
//   const app = createElement("div", {
//     class: ["bg-slate-50", "w-[1100px]", "m-20", "rounded-lg", "shadow-2xl", "flex"]
//   }, [
//     createElement("div", {
//       class: ["bg-[#f0efe8]", "w-[90px]", "min-h-[700px]", "rounded-l-lg", "flex", "justify-center"]
//     }, [
//       createElement("div", {
//         class: ["flex", "flex-col", "justify-between", "items-center", "h-full", "w-[300px]", "py-4"]
//       }, [
//         // Vos boutons existants
//         ...data.map((item, index) => {
//           const btn = createElement("button", {
//             class: [
//               "bg-[#f9f7f5]",
//               "hover:bg-orange-200",
//               "w-[80px]", "min-h-[60px]", "m-5", "mb-2",
//               "flex", "flex-col", "items-center", "justify-center", "gap-1",
//               "border-2", "border-orange-300", "rounded", "transition", "duration-200",
//               "cursor-pointer"
//             ],
//             onclick: (e) => {
//               const allButtons = e.currentTarget.parentElement.querySelectorAll("button:not(.logout-btn)");
//               allButtons.forEach(button => {
//                 button.classList.remove("border-l-4", "border-l-orange-500", "bg-orange-100");
//               });
//               e.currentTarget.classList.add("border-l-4", "border-l-orange-500", "bg-orange-100");
//               switch (item.tite) {
//                 case "ajouter": addContactForm(); break;
//                 case "groupe": showGroupes(); break;
//                 case "archive": showArchives(); break;
//                 case "diffusions": showDiffusion(); break;
//                 default: showDiscussion(); break;
//               }
//             }
//           }, [
//             createElement("i", { class: [item.icon] }),
//             createElement("span", { text: item.tite })
//           ]);
  
//           if (index === 0) {
//             btn.classList.add("border-l-4", "border-l-orange-500", "bg-orange-100");
//           }
//           return btn;
//         }),
  
//         // Bouton de déconnexion
//         createLogoutButton()
//       ])
//     ]),
//     centerColumn,
//     createElement("div", {
//       class: [ "bg-[#efe7d9]",
//         "flex-1",           // 🔥 prend tout l’espace horizontal dispo
//         "h-[100vh]",        // 🔥 prend toute la hauteur de la page
//         "rounded-r-lg",
//         "flex", "flex-col"]
//     }, [
//       navBar,
//       defaultMessagesArea,
//       sms
//     ])
//   ]);
  
//   // ✅ Centrage vertical et horizontal du `app`
//   const wrapper = createElement("div", {
//     class: ["flex", "items-center", "justify-center", "min-h-screen", "bg-gray-100"]
//   }, [app]);
//   root.appendChild(app);

//   // Initialiser avec la discussion par défaut
//   showDiscussion();
  
//   // Initialiser l'affichage du chat
//   const chatContainer = document.getElementById("chat-messages");
//   if (chatContainer) {
//     updateChatDisplay(chatContainer);
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   showAuthForm();
// });