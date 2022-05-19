import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');

import { describe } from 'mocha';
import app from '../../app';
import TasksModel from '../../database/models/Tasks.model';
import { Response } from 'superagent';
import { allTasks } from './mocks/TasksMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Should return Hello World', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    chaiHttpResponse = await chai.request(app).get('/');
    sinon.stub(TasksModel, 'findAll').resolves(allTasks as any);
  });

  after(() => {
    (TasksModel.findAll as sinon.SinonStub).restore();
  })
  
  it('in case of success', async () => {
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.have.property('message');
  })
})