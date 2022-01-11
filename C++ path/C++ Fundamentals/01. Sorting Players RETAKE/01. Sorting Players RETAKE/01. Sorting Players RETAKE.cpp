// 01. Sorting Players RETAKE.cpp : This file contains the 'main' function. Program execution begins and ends there.
//The program is not finished yet...

#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <array>
using namespace std;

void log(string a) {
	cout << a << endl;
}
vector<string> readLineIntoArr(string row) {
	stringstream sstr(row);
	vector<string> rowArray;
	string word;
	while (getline(sstr, word)) {
		sstr >> word;
		rowArray.push_back(word);
	}
	return rowArray;
}

vector<string> addScores(vector<vector<string>> arr) {
	vector<string> resultArray;

	for (int i = 0; i < arr.size(); i++) {
		string fullRow;
		string name = arr[i][0];
		log(name);

		int a, b;
		a = stoi(arr[i][1]);
		b = stoi(arr[i][2]);
		int res = a + b;

		fullRow = name + " " + to_string(res);
		cout << fullRow << endl;
		resultArray.push_back(fullRow);
	}
	return resultArray;
}

void consoleAllPlayersScores(vector<string> arr) {
	for (string  row : arr)
	{
		cout << row << endl;
	}  
}
int main()
{
	vector<vector<string>> allPlayers;
	string player;
	string rowWithSpaces;
	while (rowWithSpaces != "End") {
		
		getline(cin, rowWithSpaces);
		allPlayers.push_back(readLineIntoArr(rowWithSpaces));

	}
	
	vector<string> textRes = addScores(allPlayers);
	//consoleAllPlayersScores(textRes);

}

