import { Request, Response } from "express";
import { prismaClient } from "./prismaClient";

export class FindContatoController {
  async handle(request: Request, response: Response) {

    const contato = await prismaClient.contato.findMany();

    return response.json(contato);
  }
}
