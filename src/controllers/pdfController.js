const fs = require("fs");
const pdf = require("html-pdf");
const path = require("path");
const response = require("../helpers/response");

class pdfController {
    create(req, res) {
        try {
            if (fs.existsSync("../../public/pdf/export.pdf")) {
                fs.unlinkSync(("../../public/pdf/export.pdf"));
            }

            const html = fs.readFileSync(path.join(__dirname, "../views/pdf.html"), "utf8");

            pdf.create(html, {}).toFile("./public/pdf/export.pdf", (error, file) => {
                if (error) {
                    response(res, 400, true, "Erro ao criar arquivo");
                }

                let local;

                if (file.filename.includes("\\")) {
                    local = file.filename.split("\\");
                } else {
                    local = file.filename.split("/");
                }
                
                let paths = local.length - 3;
                let url = `/${local[paths]}/${local[paths+1]}/${local[paths+2]}`;

                console.log()

                response(res, 200, false, "Arquivo criado com êxito.", url);
            });
        } catch (error) {
            response(res, 400, true, "Erro ao criar arquivo", error);
        }
    }
}

module.exports = new pdfController;