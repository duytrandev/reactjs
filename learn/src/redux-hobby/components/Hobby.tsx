export interface IHobby {
  id: string;
  name: string;
}

export const Hobby = ({ name }: IHobby) => {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
};
