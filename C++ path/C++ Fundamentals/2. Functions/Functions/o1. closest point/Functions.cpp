

#include <iostream>
#include "string"

using namespace std;
void readPointsFromInput(double& x, double& y) {
	cin >> x >> y;
}

double calculatePitagorFormula(double x, double y) {
	return (x * x) + (y * y);
}

void printRes(double x, double y) {
	cout << "(" << x << ", " << y << ")" << endl;

}
int main()
{
	double x1, y1, x2;
	double y2;

	readPointsFromInput(x1, y1);
	readPointsFromInput(x2, y2);

	double fRes = calculatePitagorFormula(x1, y1);
	double sRes = calculatePitagorFormula(x2, y2);

	if (fRes < sRes) {
		printRes(x1, y1);
	}
	else {
		printRes(x2, y2);
	}


	return 0;
}
