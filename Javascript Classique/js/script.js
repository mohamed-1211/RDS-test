var data = winnipeg.roster;

var tableData = '<table class="table"><th>Nº</th><th>Nom</th><th>POS</th><th>AGE</th><th>TAILLE</th><th>POIDS</th><th>Date de naissance</th>';
var result_att = tableData;
var result_def = tableData;
var result_gar = tableData;

// Fonction qui calcule l'age des joueurs
function calculAge(birthDate) {
    birthDate = birthDate.split('-');
    var birthMonth = birthDate[1]-1, // (les mois commencent à 0)
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

//Parcourir l'objet data pour afficher la liste
for (var i = 0, len = data.length; i < len; i++) {
	// Ici on s'assure que le joueur a un numéro et que son status et actif
	if(data[i].uniform_number != '-' && data[i].phase_status == 'active'){
		// on crée trois bloc selon la postion du joueur
		if(data[i].position == 'Défenseur'){
			result_def += '<tr>';
			result_def += '<td>' + data[i].uniform_number + '</td>';
			result_def += '<td>' + data[i].first_name + ' ' + data[i].last_name + '</td>';
			result_def += '<td>D</td>';
			result_def += '<td>' + calculAge(data[i].birth_date) + '</td>';
			result_def += '<td>' + data[i].height + '</td>';
			result_def += '<td>' + data[i].weight + ' lbs</td>';
			result_def += '<td>' + data[i].birth_date + '</td>';
			result_def += '</tr>';
		}

		else if(data[i].position == 'Gardien'){
			result_gar += '<tr>';
			result_gar += '<td>' + data[i].uniform_number + '</td>';
			result_gar += '<td>' + data[i].first_name + ' ' + data[i].last_name + '</td>';
			result_gar += '<td>G</td>';
			result_gar += '<td>' + calculAge(data[i].birth_date) + '</td>';
			result_gar += '<td>' + data[i].height + '</td>';
			result_gar += '<td>' + data[i].weight + ' lbs</td>';
			result_gar += '<td>' + data[i].birth_date + '</td>';
			result_gar += '</tr>';
		}

		else{
			result_att += '<tr>';
			result_att += '<td>' + data[i].uniform_number + '</td>';
			result_att += '<td>' + data[i].first_name + ' ' + data[i].last_name + '</td>';
			//on affiche l'abrégé de la position des joueurs
			if(data[i].position == 'Centre'){
				result_att += '<td>C</td>';
			}
			else if(data[i].position == 'Ailier Droit'){
				result_att += '<td>AD</td>';
			}
			else {
				result_att += '<td>AG</td>';
			}
			result_att += '<td>' + calculAge(data[i].birth_date) + '</td>';
			result_att += '<td>' + data[i].height + '</td>';
			result_att += '<td>' + data[i].weight + ' lbs</td>';
			result_att += '<td>' + data[i].birth_date + '</td>';
			result_att += '</tr>';
		}
	} 
}

result_def, result_gar, result_att += '</table>';

document.getElementById('attaquants').innerHTML = result_att;
document.getElementById('defenseurs').innerHTML = result_def;
document.getElementById('gardiens').innerHTML = result_gar;