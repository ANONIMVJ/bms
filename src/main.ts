import { 
  NestFactory 
} from '@nestjs/core';
import { 
  AppModule 
} from './app.module';
import { 
  CustomValidationPipe 
} from './pipe/validation.pipe'
import { 
  DocumentBuilder, 
  SwaggerModule 
} from '@nestjs/swagger';

async function start() {
  try {

    const PORT = process.env.PORT || 30304    

    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new CustomValidationPipe())

    
    const config = new DocumentBuilder()
    .setTitle('Building materials store project')
    .setDescription('Building materials store project REST API')
    .setVersion('1.0')
    .addTag('NESTJS-VALIDATION-SWAGGER-GUARD-SEQUALIZE-PG-DOCEKR')
    .addTag('Author Javohir Viktorov')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    await app.listen(PORT, ()=>{

      console.log(`Server started at: ${PORT}`);
      
    });
    
  } catch (error) {

    console.log(error);

  }
}
start();
