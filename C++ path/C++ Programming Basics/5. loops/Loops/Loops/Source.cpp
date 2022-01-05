#include <iostream>
#include <string>
using namespace std;

int main()
{
	
	string winner; 
	int p1Points = 0;
		int p2Points= 0;

	string ship1, ship2;
	string firstPname, SecondPName;
	cout << "enter the First ship word shorter than 6 symbols: ";
	cin >> ship1;
	cout << "enter the Second ship word shorter than 6 symbols: ";
	cin >> ship2;
	cout << "Enter the First player name: " << endl;
	cin >> firstPname;
	cout << "Enter the Second player name: " << endl;
	cin >> SecondPName;

	//Here we start a game for only the first player and every time its his turn to bomb the other player.
	//TODO Make a version of the game for the second player also;
	int playerTurn = 1;
	while (ship2.length() != p1Points && ship1.length() != p2Points) {
		if (playerTurn % 2 == 1) {
			//If the num is even than 

			cout << "Enter bomb " << firstPname << endl;
			char p1Char;
			cin >> p1Char;

			for (int i = 0; i < ship2.length(); i += 1) {
				if (p1Char == ship2[i]) {

					ship2[i] = '*';
					p1Points++;
					cout << "The letter " << ship2[i] << " is on the ship. \n You earn one more point!" << endl;
					cout << "The ship looks like this now - " << ship2 << endl;
					playerTurn++;
				}
	
			}
		}
		else {
			//When the num is even the second player plays;
			cout << "Enter bomb " << SecondPName << endl;
			char p2Char;
			cin >> p2Char;

			for (int i = 0; i < ship1.length(); i += 1) {
			 if (p2Char == ship1[i]) {

					ship1[i] = '*';
					p2Points++;
					cout << "The letter " << p2Char  << " is on the ship. \n You earn one more point!" << endl;
					cout << "The ship looks like this now - " << ship1 << endl;
					playerTurn++;
				}
			}
		}
		
		playerTurn++;
		
	}


	if (ship2.length() == p1Points) {

		cout << "\nThe winner is " << firstPname << " !!!\n";

	}
	else {
		cout << "\nThe winner  today is " << SecondPName << " !!!\n";
	}

}
