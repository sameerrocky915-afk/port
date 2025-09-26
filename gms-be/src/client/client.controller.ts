import {
    Controller, Get, Post, Body, Patch, Param, Delete,
    UseGuards,
    Req,
  } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { GetOrganizationId } from 'src/common/decorators/get-organization-Id.decorator';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
  
@ApiTags("Client")
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiBearerAuth('jwt')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("organizationAdmin")
  @ResponseMessage('Client created successfully')
  create(@Body() createClientDto: CreateClientDto, @GetOrganizationId() organizationId: string) {
    return this.clientService.create(createClientDto, organizationId);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get('/by-organization')
  @ApiBearerAuth('jwt')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("organizationAdmin")
  @ResponseMessage('Client fetched successfully')
  findAllByOrganizationId(@GetOrganizationId() organizationId: string) {
    return this.clientService.findClientByOrganizationId(organizationId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }


  @Patch(':id')
  @ApiBearerAuth('jwt')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("organizationAdmin")
  @ResponseMessage('Client updated successfully')
  update(@Param('id') id: string, @Body() UpdateClientDto: UpdateClientDto) {
    return this.clientService.update(id, UpdateClientDto);
  }

  @Delete(':id')
  @ApiBearerAuth('jwt')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("organizationAdmin") 
  @ResponseMessage('Client deleted successfully')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
