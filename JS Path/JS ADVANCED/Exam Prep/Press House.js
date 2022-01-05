function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title
            this.content = content
        }
        toSting() {
            return `Title: ${this.title}
Content: ${this.content}`
        }
    }
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content),
                this.originalResearch = originalResearch
                this.comments = []
        }
        set title(title, content) {
            if (content.length < 150) {
                throw new Error("Short reports content should be less then 150 symbols.")
            } else if (title == '') {
                throw new Error("The original research should have author and title.")
            }

            this.content = content;
        }
        addComment(comment) {

        }

    }
    class BookReview extends Article {

    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}
let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
//------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString());
//------------------------------
// let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
// console.log(book.addClient("The Guardian", "100 symbols"));
// console.log(book.addClient("Goodreads", "30 symbols"));
