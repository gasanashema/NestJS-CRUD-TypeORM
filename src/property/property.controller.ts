import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/creatProperty.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  createPropertySchema,
  type CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }
  @Get(':id/:slug')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof sort);

    return id;
  }

  @Post()
  // @HttpCode(202)
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    @Body()
    body: CreatePropertyZodDto,
  ) {
    return body;
  }

  @Patch(':id')
  update(
    @Body()
    body: CreatePropertyDto,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    header: HeadersDto,
  ) {
    return header;
  }
}
