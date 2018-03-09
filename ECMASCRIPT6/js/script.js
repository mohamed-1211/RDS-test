//on crée une variable qui contiendra l'objet
let data = winnipeg.roster;

let result_att = result_def = result_gar = `<table class="table">
				<tr>	
					<th>Nº</th>
					<th>Nom</th>
					<th>POS</th>
					<th>AGE</th>
					<th>TAILLE</th>
					<th>POIDS</th>
					<th>Date de naissance</th>
				</tr>	
			`;
// Fonction qui calcule l'age des joueurs
let calculAge = (birthDate) => {
    birthDate = birthDate.split('-');
    let birthMonth = birthDate[1]-1, // (les mois commencent à 0)
        birthDay = birthDate[2],
        now = new Date(),
        currentMonth = now.getMonth(),
        CurrentDay = now.getDate(),
        age = now.getFullYear()-birthDate[0];
     
    // Si la date d'anniversaire n'est pas encore passée, on corrige l'age
    if(currentMonth<birthMonth || currentMonth==birthMonth && CurrentDay<birthDay) {
        age--;
    }
    return age;
}

//fonction qui permet de génerer le tableau, elle prend comme paramétres:
// obj : objet à parcourir, pos : pour afficher la position du joueur en abrégé
let content = (obj, pos)=>{
	return `<tr>
				<td> ${obj.uniform_number} </td>
				<td> ${obj.first_name}  ${obj.last_name} </td>
				<td>${pos}</td>
				<td> ${calculAge(obj.birth_date)} </td>
				<td> ${obj.height} </td>
				<td> ${obj.weight} lbs</td>
				<td> ${obj.birth_date} </td>
			</tr>
	`;
}

//Parcourir l'objet data pour afficher la liste
data.forEach((value) => {
	// Ici on s'assure que le joueur a un numéro et que son status et actif
	if(value.uniform_number != '-' && value.phase_status == 'active'){
		// on crée trois bloc selon la postion du joueur
		if(value.position == 'Défenseur'){
			result_def += content(value, 'D');
		}

		else if(value.position == 'Gardien'){
			result_gar += content(value, 'G');
		}

		else{
			//on affiche l'abrégé de la position des joueurs
			if(value.position == 'Centre'){
				result_att += content(value, 'C');
			}
			else if(value.position == 'Ailier Droit'){
				result_att += content(value, 'AD');
			}
			else {
				result_att += content(value, 'AG');
			}
		}
	} 
});

result_def, result_gar, result_att += '</table>';

document.getElementById('attaquants').innerHTML = result_att;
document.getElementById('defenseurs').innerHTML = result_def;
document.getElementById('gardiens').innerHTML = result_gar;