import { Request, Response } from "express";
import { prismaClient } from "./prismaClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_TOKEN);
export class CreateContatoController {
    async handle(request: Request, response: Response) {

        const responseContent = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {},
            resend: {}
        };
        const { nome, email, phone } = request.body;

        if (!nome || nome == "") { responseContent.message = "Preencha o campo nome"; }
        else if (!email || email == "") { responseContent.message = "Preencha o campo email"; }
        else if (!phone || phone == "") { responseContent.message = "Preencha o campo telefone"; }
        else {
            try {
                const contatoPrisma = await prismaClient.contato.create({
                    data: {
                        email,
                        nome,
                        phone
                    },
                });
                responseContent.status = true;
                responseContent.message = "Recebemos seu contato com sucesso";
                responseContent.data = contatoPrisma;

                responseContent.resend = resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: ['contato@estudiogrape.com.br', 'fabiofreitassilvacontato@gmail.com'],
                    subject: 'Contato - Site',
                    html: '<p>nome: ' + nome + '</p><p>email: ' + email + '</p><p>phone: ' + phone + '</p>'
                });
                return response.json(responseContent);



            }
            catch (erro: any) {
                if (erro.code === 'P2002') { responseContent.message = "Você já está cadastrado em nosso sistema!"; }
            }
        }
        return response.json(responseContent);
    }
}
