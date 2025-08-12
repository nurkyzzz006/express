import { title } from "process";
import { Request, Response } from "express";
import prisma from "../../plugins/prisma";

const getTodos = async (req: Request, res: Response) => {
  try {
    const data = await prisma.todo.findMany();
    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    console.log(`error in getTodods ${e}`);
  }
};
const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.todo.findFirst({
      where: {
        id: +id,
      },
    });
    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    console.log(`error in getTodods ${e}`);
  }
};
const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const data = await prisma.todo.create({
      data: {
        title: title,
        description: description,
      },
    });
    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    console.error(`error in getTodods ${e}`);
    res.status(500).send({
      success: false,
      message: `error in getTodods ${e}`,
    });
  }
};
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.todo.delete({
      where: {
        id: +id,
      },
    });

    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    console.error(`error in getTodods ${e}`);
    res.status(500).send({
      success: false,
      message: `error in getTodods ${e}`,
    });
  }
};
const upDateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const data = await prisma.todo.update({
      where: {
        id: +id,
      },
      data: {
        title: title,
        description: description,
      },
    });
    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    console.error(`error in getTodods ${e}`);
    res.status(500).send({
      success: false,
      message: `error in getTodods ${e}`,
    });
  }
};

export default { getTodos, createTodo, deleteTodo, getTodoById, upDateTodo };
