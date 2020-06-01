import IUser from "../../models/Users.ts";

let User: Array<IUser> = [];

export const getAll = ({ response }: { response: any }) => {
  response.body = User;
};

export const getById = ({
  params,
  response,
}: {
  params: {
    id: string;
  };
  response: any;
}) => {
  const user = User.filter((user) => user.id === parseInt(params.id));
  if (user.length) {
    response.status = 200;
    response.body = user[0];
    return;
  }

  response.status = 400;
  response.body = { msg: `user not exist ${params.id}` };
};

export const create = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const { name, id, email, password }: {
    name: string;
    id: number;
    email: string;
    password: number;
  } = body.value;
  User.push({
    id: id,
    name: name,
    email: email,
    password: password,
  });

  response.body = { msg: "OK" };
  response.status = 200;
};

export const update = async ({
  params,
  request,
  response,
}: {
  params: {
    id: string;
  };
  request: any;
  response: any;
}) => {
  const userId = User.filter((user) =>
    user.id === parseInt(params.id)
  );
  const body = await request.body();
  const { name, email, password }: {
    name: string;
    email: string;
    password: number;
  } = body.value;

  if (userId.length) {
    userId[0].name = name;
    userId[0].email = email;
    userId[0].password = password;
    response.status = 200;
    response.body = { msg: "OK" };
    return;
  }

  response.status = 400;
  response.body = { msg: `user not exist ${params.id}` };
};

export const remove = ({
  params,
  response,
}: {
  params: {
    id: string;
  };
  response: any;
}) => {
  const lengthBefore = User.length;
  User = User.filter((user) => user.id !== parseInt(params.id));

  if (User.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: `user not exist ${params.id}` };
    return;
  }

  response.body = { msg: "OK" };
  response.status = 200;
};
