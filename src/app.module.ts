import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleSheetModule } from 'nest-google-sheet-connector';
// import credentials from "../src/"

const credentials = {
  type: 'service_account',
  project_id: 'nestjs-project-391714',
  private_key_id: '5380b942776224758b3b53183cba983d02ca3925',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChLz8M3G48O7NT\n3ZjBDMdYIj0wulI3Z1P/Q1m56tG1n0cqWzG4sKZorNC483bp05bGOUD6fZo4LLH5\n5Lh3evMM7XDRYY+wYGU2AVCq1/MTRFH7UzVIYJdncu5iXJ9XzyisjMESIRsi0a7G\nYI4RQUObasg/kPrpKCDMoJMJzIYcLvgH/ehn3ftlTxRku30TmUH0F2UJbHmL4nZX\n/1UmV/NuA9AFXaZ+T0UFhrKfGfZzeHePI0nay1UwuQt+rQ+e4aslO/kULowfp+jt\ng+RHAdeJHTlSeoETFh81Epl4fyk3Fos6vZRnuQlej9tT66QbuAvf/9XgAXs8gOvi\nI69FUMlZAgMBAAECggEAFccomYgWUYduy9020e1Jk967GMsxPPDLmG4/qySPOsnE\nrPQ5tsQQv+I1qKpQk02g413XVIua8OMXwEqxzTGXXFRKjX0ak9ClFtO8/qWt30O4\nYKDrTpZVGUed7jv91Y3qZ3dJxjV4kU72cobs5bzv3F8O+QkRixDTxFd1IST5VnOf\n2imXkHE5s8mMxFuxhtJd8dOivSZIq5GAU8fCKXuMHoVaqlFr/70+X9iiwSRtKdzz\nqEfGLFPzCf5Pwah4jlZtZw7R8NvbP4eKKbk44yLvHg4j5gNG9vW1p/jG6f7yQkG9\nBzqbt9klFrEvJvKOlyiNcB+Sy1xrV+vxpm1vGEIwzwKBgQDWz9bhQ/ldZDu9N+yq\nNfbSx6gc9Yz6FDeY8SeZHwn8sDl6D06vpfK4FVcySir+GCYlgjXsV2649Iy6T1+C\n5JZk9dx8HBA18+t7YBqd+U5XSo+IjSqbwgvYB3OpCN95bG0Cge+sA1BenE89sB3g\nsx6ra7ViAElyaJ39tW8Vw6F8lwKBgQDAFxSEuQaRl2svLzkc1WD1SPZk5LbPrMzr\ngIXLHOx6hjhHLY9N7erIjLQMptoKH6fy44niev0RojkJE8/Vr0tB8L7v5Nr3c+1z\nQTD6MzRuSUgUXSkqZtCGgvoc00/npqimHFIkb7KZNvUP30MowP1aK7SIjn9fhDH8\nGowNOJ53jwKBgQDL1ou0VRlTCuM5SdE1L2IZX8ZiPIxbXkXnxqbpwS9r7hmMfuwO\n920cS3vjx8eGOIoyO55JuCnkLoM/5EPg5GLmSPvBdavYVq8U8vwu/bzeTm1niXVu\nOjOc+m1BcJ8HDOFgaMZytu5T6QW0puOjLrWiuuFyro0DmMybTMitoWci3wKBgQCe\nH2Goj5a0qmx0/u6Iqa2SvGj3TL6f3aMiCT4ZoMmZYntZPEvG3p5yUEC2WXMK+lwK\nOPv8DznbFirVKhXf1Niig0bpuv30zN0eDv/+NcBnOLO476c/XDszPwYcTGZuTmZt\ntsp3a+sc7Hx2gFaMabEkVO3bq1F2kx+CY2f+SilISQKBgA+wsKcsY4yNhxdxRUWa\nc6XIPqG96bXPzq4rrI1lAWViIfPEcAmKZai7Nxr28WTorLwpas40+HiUJ9WgEBgE\ngOg/o4c59S9FW8dAiU/lN2UNyu69DT+MjC/hke6bXH8DhMc/9lh0kA9+d17cpQ5V\n8iYBnFbbK0EpQyG6zXqhyONZ\n-----END PRIVATE KEY-----\n',
  client_email:
    'nest-js-service-account@nestjs-project-391714.iam.gserviceaccount.com',
  client_id: '117535462363498016309',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/nest-js-service-account%40nestjs-project-391714.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
};

@Module({
  imports: [GoogleSheetModule.register(credentials)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
