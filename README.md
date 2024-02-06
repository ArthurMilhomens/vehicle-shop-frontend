## Getting Started

First, clone both projects([front-end](https://github.com/ArthurMilhomens/vehicle-shop-frontend), [back-end](https://github.com/ArthurMilhomens/vehicle-shop-backend)) and add them to the same folder. Then, go to the backend folder and create a .env file with these variables:

```.env
ACCESS_TOKEN_SECRET="W4T9NgHcaPa9mp4qCCT5mnUHQaUcyjJaKW4LyaRdvR2o3D7fdny0QE36AEx6olypTa8l3EN2fhMMGfwr" // This is a randomly generated secret token, and there is no concern in displaying it.
DATABASE_URL="postgresql://docker:vshop@database_vshop:5432/vshop"
```

## Run project

Navigate to the "backend" folder and execute the following command:

```bash
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can log in using the avatar icon in the top-right corner. Please use the following credentials: E-mail: admin@admin.com, Password: admin, to access the system and begin creating records.
