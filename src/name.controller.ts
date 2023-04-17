import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request} from 'express';

@Controller('name')
export class NameController {
  @Get('/:name')
  findOne(@Param('name') name : string ): string {
    return `This action returns a #${name} name`;
  }
}