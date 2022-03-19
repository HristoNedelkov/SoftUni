#include <cctype>
#include <iostream>
#include <cstring>
#include <string>

int main()
{
	std::string line;
	std::getline(std::cin, line);
	//use isalpha :)
	for (auto i = 0; i < line.length(); i++) {
		
	}
// 	while (isstr >> word){
// 		std::size_t foundAtIndexA = word.find(",");
// 
// 		if (foundAtIndex < 100) {
// 			char afterCommaChar = toupper(word[foundAtIndex + 1]);
// 			word[foundAtIndex + 1] = afterCommaChar;
// 		}
// 		if (isupper(word[0])) {
// 			res += word;
// 			res += " ";
// 			continue;
// 		};
// 		
// 		char a = toupper(word[0]);
// 		word[0] = a;
// 		std::string restChars = word.substr(1, word.length() - 1);
// 			
// 		res += a;
// 		res += restChars;
// 		res += " ";
// 
// 	}
// 
// 	std::cout << res << std::endl;
	return 0;
}