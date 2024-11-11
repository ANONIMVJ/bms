import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()

export class JwtAdminGuard implements CanActivate{
    constructor(private readonly jwtService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const req = context.switchToHttp().getRequest()
        const authHeader = req.headers.authorization
        if(!authHeader){
            throw new UnauthorizedException({
                message:"Token is not given in the header..."
            })
        }

        const bearer = authHeader.split(" ")[0]
        const token = authHeader.split(" ")[1]

        if(bearer!=="Bearer" || !token){
            throw new UnauthorizedException({
                message:"Bearer and Token are not provided..."
            })
        }

        let payload:any

        try {

            payload = this.jwtService.verify(token)
            
        } catch (error) {

            throw new UnauthorizedException({
                message:"Token failed verification...",
                error
            })
            
        }
        req.user = payload
        console.log(req);
        
        return true
    }
}