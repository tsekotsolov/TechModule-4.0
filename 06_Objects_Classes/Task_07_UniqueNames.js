solve = input => [...new Set([...input])].sort((a, b) => a.length === b.length ? a.localeCompare(b): a.length - b.length).join('\n')



console.log(solve(["Denise",
"Ignatius",
"Iris",
"Isacc",
"Indie",
"Dean",
"Donatello",
"Enfuego",
"Benjamin",
"Biser",
"Bounty",
"Renard",
"Rot"
]));
