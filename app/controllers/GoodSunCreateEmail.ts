import { Request, Response } from "express";
import { prismaClient } from "./prismaClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_TOKEN);
export class GoodSunCreateEmail {
    async handle(request: Request, response: Response) {

        const responseContent = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {},
            resend: {}
        };
        const { email } = request.body;

        if (!email || email == "") { responseContent.message = "Preencha o campo email"; }
        else {
            try {
                const contatoPrisma = await prismaClient.goodSun_Email.create({
                    data: {
                        email
                    },
                });
                responseContent.status = true;
                responseContent.message = "Recebemos seu contato com sucesso";
                responseContent.data = contatoPrisma;

                responseContent.resend = await resend.emails.send({
                    from: 'noreply@estudiogrape.com.br',
                    to: 'contato@estudiogrape.com.br',
                    subject: 'GoodSun - Contato',
                    html: '<p>email: ' + email + '</p>'
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
