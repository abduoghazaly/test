export class StudyMaterials {
  name: string;
  image: string;
  description: string;
  status: string;

  constructor(
    name: string,
    image: string,
    description: string,
    status: string
  ) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.status = status;
  }
}
